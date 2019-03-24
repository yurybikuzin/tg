
var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "' + src.parent().relate( this.root().resolve( 'node_modules' ) ) + '/" ) + ".js" ] }; 

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports;
//mol.js.map
;

$node[ "../mol/mol.js" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )

;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , self ) : self
$.$$ = $

$.$mol = $  // deprecated

;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    class $mol_object {
        get $() {
            const owner = this.object_owner();
            return (owner && owner.$ || $);
        }
        static make(config) {
            const instance = new this;
            for (let key in config)
                instance[key] = config[key];
            return instance;
        }
        static toString() {
            return this.name;
        }
        object_owner(next) {
            return this['object_owner()'] || (this['object_owner()'] = next);
        }
        object_host(next) {
            return this['object_host()'] || (this['object_host()'] = next);
        }
        object_field(next) {
            return this['object_field()'] || (this['object_field()'] = next) || '';
        }
        object_id(next) {
            return this[Symbol.toStringTag] || (this[Symbol.toStringTag] = next) || '';
        }
        toString() {
            return this.object_id();
        }
        toJSON() {
            return this.toString();
        }
        destructor() { }
    }
    $mol_object.$ = $;
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target.constructor !== source.constructor)
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target.constructor);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        let equal = target.length === source.length;
        for (let i = 0; i < target.length; ++i) {
            const conformed = $mol_conform(target[i], source[i]);
            if (!$.$mol_compare_any(conformed, target[i])) {
                try {
                    target[i] = conformed;
                }
                catch (error) {
                    equal = false;
                }
            }
            if (equal && !$.$mol_compare_any(conformed, source[i]))
                equal = false;
        }
        return equal ? source : target;
    }
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        if ($.$mol_log_context())
            $.$mol_log_context()();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_debug(next) {
        if (next !== undefined) {
            if (next == null) {
                sessionStorage.removeItem('$mol_log_debug()');
            }
            else {
                sessionStorage.setItem('$mol_log_debug()', next);
            }
        }
        return sessionStorage.getItem('$mol_log_debug()');
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.web.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    $.$mol_log_filter = function $mol_log_filter(next) {
        if (next !== undefined) {
            if (next == null) {
                sessionStorage.removeItem('$mol_log_filter()');
            }
            else {
                sessionStorage.setItem('$mol_log_filter()', next);
            }
            filter = next;
        }
        if (filter !== undefined)
            return filter;
        return filter = sessionStorage.getItem('$mol_log_filter()');
    };
    if (typeof sessionStorage === 'undefined')
        $.$mol_log_filter = (next) => filter = next;
    if ($.$mol_log_filter() == null)
        console.info('Use $mol_log_filter( needle : string|null ) to toggle logs');
})($ || ($ = {}));
//log_filter.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        const filter = $.$mol_log_filter();
        if (filter == null)
            return task;
        return function $mol_log_group_wrapper(...args) {
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_state_stack = new Map();
})($ || ($ = {}));
//stack.js.map
;
void function() {

	if( typeof alert === 'function' ) {
		var nativeAlert = alert
		window.alert = function alert( message ) {
			console.warn( 'Alerts causes atom synchronization problems in IE. Use custom notificator instead.' )
			return nativeAlert( message )
		}
	}

	if( typeof confirm === 'function' ) {
		var nativeConfirm = confirm
		window.confirm = function confirm( question ) {
			console.warn( 'Confirms causes atom synchronization problems in IE. Use custom dialog instead.' )
			return nativeConfirm( question )
		}
	}

	if( typeof confirm === 'function' ) {
		var nativePrompt = prompt
		window.prompt = function prompt( question , def ) {
			console.warn( 'Prompts causes atom synchronization problems in IE. Use custom dialog instead.' )
			return nativePrompt( question , def )
		}
	}

}()

;
"use strict";
var $;
(function ($) {
    let $mol_atom_status;
    (function ($mol_atom_status) {
        $mol_atom_status["obsolete"] = "obsolete";
        $mol_atom_status["checking"] = "checking";
        $mol_atom_status["pulling"] = "pulling";
        $mol_atom_status["actual"] = "actual";
    })($mol_atom_status = $.$mol_atom_status || ($.$mol_atom_status = {}));
    class $mol_atom extends $.$mol_object {
        constructor(id, handler = next => next) {
            super();
            this.masters = null;
            this.slaves = null;
            this.status = $mol_atom_status.obsolete;
            this.object_id(id);
            this.handler = handler;
        }
        destructor() {
            this.unlink();
            this.status = $mol_atom_status.actual;
            const value = this['value()'];
            if (value instanceof $.$mol_object) {
                if (value.object_owner() === this)
                    value.destructor();
            }
            this['value()'] = undefined;
        }
        unlink() {
            this.disobey_all();
            if (this.slaves)
                this.check_slaves();
        }
        get(force) {
            const slave = $mol_atom.stack[0];
            if (slave) {
                this.lead(slave);
                slave.obey(this);
            }
            this.actualize(force);
            const value = this['value()'];
            if (typeof Proxy !== 'function' && value instanceof Error) {
                throw value;
            }
            return value;
        }
        actualize(force) {
            if (this.status === $mol_atom_status.pulling) {
                throw new Error(`Cyclic atom dependency of ${this}`);
            }
            if (!force && this.status === $mol_atom_status.actual)
                return;
            const slave = $mol_atom.stack[0];
            $mol_atom.stack[0] = this;
            if (!force && this.status === $mol_atom_status.checking) {
                this.masters.forEach(master => {
                    if (this.status !== $mol_atom_status.checking)
                        return;
                    master.actualize();
                });
                if (this.status === $mol_atom_status.checking) {
                    this.status = $mol_atom_status.actual;
                }
            }
            if (force || this.status !== $mol_atom_status.actual) {
                const oldMasters = this.masters;
                this.masters = null;
                if (oldMasters)
                    oldMasters.forEach(master => {
                        master.dislead(this);
                    });
                this.status = $mol_atom_status.pulling;
                const next = this.pull(force);
                if (next === undefined) {
                    this.status = $mol_atom_status.actual;
                }
                else {
                    this.push(next);
                }
            }
            $mol_atom.stack[0] = slave;
        }
        pull(force) {
            try {
                return this.handler(this._next, force);
            }
            catch (error) {
                if (error['$mol_atom_catched'])
                    return error;
                if (error instanceof $mol_atom_wait)
                    return error;
                console.error(error.stack || error);
                if (!(error instanceof Error)) {
                    error = new Error(error.stack || error);
                }
                error['$mol_atom_catched'] = true;
                return error;
            }
        }
        set(next) {
            return this.value(next);
        }
        push(next_raw) {
            if (!(next_raw instanceof $mol_atom_wait)) {
                this._ignore = this._next;
                this._next = undefined;
            }
            this.status = next_raw === undefined ? $mol_atom_status.obsolete : $mol_atom_status.actual;
            const prev = this['value()'];
            let next = (next_raw instanceof Error || prev instanceof Error) ? next_raw : $.$mol_conform(next_raw, prev);
            if (next === prev)
                return prev;
            if (prev instanceof $.$mol_object) {
                if (prev.object_owner() === this)
                    prev.destructor();
            }
            if (next instanceof $.$mol_object) {
                next.object_owner(this);
            }
            if ((typeof Proxy === 'function') && (next instanceof Error)) {
                next = new Proxy(next, {
                    get(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                    ownKeys(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                });
            }
            this['value()'] = next;
            $.$mol_log(this, prev, '➔', next);
            this.obsolete_slaves();
            return next;
        }
        obsolete_slaves() {
            if (!this.slaves)
                return;
            this.slaves.forEach(slave => slave.obsolete());
        }
        check_slaves() {
            if (this.slaves) {
                this.slaves.forEach(slave => slave.check());
            }
            else {
                $mol_atom.actualize(this);
            }
        }
        check() {
            if (this.status === $mol_atom_status.actual || this.status === $mol_atom_status.pulling) {
                this.status = $mol_atom_status.checking;
                this.check_slaves();
            }
        }
        obsolete() {
            if (this.status === $mol_atom_status.obsolete)
                return;
            this.status = $mol_atom_status.obsolete;
            this.check_slaves();
            return;
        }
        lead(slave) {
            if (!this.slaves) {
                this.slaves = new Set();
                $mol_atom.unreap(this);
            }
            this.slaves.add(slave);
        }
        dislead(slave) {
            if (!this.slaves)
                return;
            if (this.slaves.size === 1) {
                this.slaves = null;
                $mol_atom.reap(this);
            }
            else {
                this.slaves.delete(slave);
            }
        }
        obey(master) {
            if (!this.masters)
                this.masters = new Set();
            this.masters.add(master);
        }
        disobey(master) {
            if (!this.masters)
                return;
            this.masters.delete(master);
        }
        disobey_all() {
            if (!this.masters)
                return;
            this.masters.forEach(master => master.dislead(this));
            this.masters = null;
        }
        cache(next) {
            if (next === undefined)
                return this['value()'];
            return this['value()'] = next;
        }
        value(next, force) {
            if (force === $mol_atom_force_cache)
                return this.push(next);
            if (next !== undefined) {
                if (force === $mol_atom_force)
                    return this.push(next);
                let next_normal = $.$mol_conform(next, this._ignore);
                if (next_normal === this._ignore)
                    return this.get(force);
                if (!(this['value()'] instanceof Error)) {
                    next_normal = $.$mol_conform(next, this['value()']);
                    if (next_normal === this['value()'])
                        return this.get(force);
                }
                this._next = next_normal;
                this._ignore = next_normal;
                force = $mol_atom_force_update;
            }
            return this.get(force);
        }
        static actualize(atom) {
            $mol_atom.updating.push(atom);
            $mol_atom.schedule();
        }
        static reap(atom) {
            $mol_atom.reaping.add(atom);
            $mol_atom.schedule();
        }
        static unreap(atom) {
            $mol_atom.reaping.delete(atom);
        }
        static schedule() {
            if (this.scheduled)
                return;
            new $.$mol_defer($.$mol_log_group('$mol_atom.sync()', () => {
                if (!this.scheduled)
                    return;
                this.scheduled = false;
                this.sync();
            }));
            this.scheduled = true;
        }
        static sync() {
            this.schedule();
            while (true) {
                const atom = this.updating.shift();
                if (!atom)
                    break;
                if (this.reaping.has(atom))
                    continue;
                if (atom.status !== $mol_atom_status.actual)
                    atom.get();
            }
            while (this.reaping.size) {
                this.reaping.forEach(atom => {
                    this.reaping.delete(atom);
                    if (!atom.slaves)
                        atom.destructor();
                });
            }
            this.scheduled = false;
        }
        then(done, fail) {
            let prev;
            let next;
            const atom = new $mol_atom(`${this}.then(${done})`, () => {
                try {
                    if (prev == undefined) {
                        const val = this.get();
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val.valueOf();
                        prev = val;
                    }
                    if (next == undefined) {
                        const val = done(prev);
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val.valueOf();
                        next = val;
                    }
                    return next;
                }
                catch (error) {
                    if (error instanceof $mol_atom_wait)
                        return error;
                    if (fail)
                        return fail(error);
                    return error;
                }
            });
            $mol_atom.actualize(atom);
            return atom;
        }
        catch(fail) {
            return this.then(next => next, fail);
        }
    }
    $mol_atom.stack = [];
    $mol_atom.updating = [];
    $mol_atom.reaping = new Set();
    $mol_atom.scheduled = false;
    $.$mol_atom = $mol_atom;
    $.$mol_state_stack.set('$mol_atom.stack', $mol_atom.stack);
    function $mol_atom_current() {
        return $mol_atom.stack[0];
    }
    $.$mol_atom_current = $mol_atom_current;
    class $mol_atom_wait extends Error {
        constructor() {
            super(...arguments);
            this.name = '$mol_atom_wait';
        }
    }
    $.$mol_atom_wait = $mol_atom_wait;
    class $mol_atom_force extends Object {
        static toString() { return this.name; }
    }
    $.$mol_atom_force = $mol_atom_force;
    class $mol_atom_force_cache extends $mol_atom_force {
    }
    $.$mol_atom_force_cache = $mol_atom_force_cache;
    class $mol_atom_force_update extends $mol_atom_force {
    }
    $.$mol_atom_force_update = $mol_atom_force_update;
})($ || ($ = {}));
//atom.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object')
            return JSON.stringify(value);
        if (value instanceof Array)
            return JSON.stringify(value);
        if (value.constructor === Object)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_value(next, force) {
            const host = this;
            let atom = store.get(host);
            if (!atom) {
                const id = `${host}.${name}()`;
                atom = new $.$mol_atom(id, function () {
                    const v = value.apply(host, arguments);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                atom.object_owner(host);
                const destructor = atom.destructor;
                atom.destructor = () => {
                    store.delete(host);
                    destructor.call(atom);
                };
                store.set(host, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        descr.value['value'] = value;
    }
    $.$mol_mem = $mol_mem;
    function $mol_mem_key(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_key_value(key, next, force) {
            const host = this;
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let atom = dict.get(key);
            if (!atom) {
                const id = `${host}.${name}(${JSON.stringify(key)})`;
                atom = new $.$mol_atom(id, function (...args) {
                    const v = value.apply(host, [key, ...args]);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                const destructor = atom.destructor;
                atom.destructor = () => {
                    dict.delete(key);
                    destructor.call(atom);
                };
                dict.set(key, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        void (descr.value['value'] = value);
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next, force) {
            return next || {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_window, "size", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', $.$mol_log_group(`$mol_window resize`, () => {
        $mol_window.size(undefined, $.$mol_atom_force_cache);
    }));
})($ || ($ = {}));
//window.web.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//context.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
    function $mol_dom_render_children(el, childNodes) {
        const node_list = [];
        const node_set = new Set();
        for (let i = 0; i < childNodes.length; ++i) {
            let node = childNodes[i];
            if (node == null)
                continue;
            if (Object(node) === node) {
                if (node['dom_tree'])
                    node = node['dom_tree']();
                node_list.push(node);
                node_set.add(node);
            }
            else {
                node_list.push(String(node));
            }
        }
        let nextNode = el.firstChild;
        for (let view_ of node_list) {
            const view = view_.valueOf();
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false)
                el.removeAttribute(name);
            else
                el.setAttribute(name, String(val));
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//render.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        return func.name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $$;
    (function ($$_1) {
        let $$;
    })($$ = $.$$ || ($.$$ = {}));
    let $mol;
    (function ($mol_1) {
        let $mol;
    })($mol = $.$mol || ($.$mol = {}));
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_tree(nodes.item(i));
                document.title = view.title();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : next ? [node] : []) || [];
            return value.indexOf(node) !== -1;
        }
        context(next) {
            return next || $;
        }
        get $() {
            return this.context();
        }
        set $(next) {
            this.context(next);
        }
        context_sub() {
            return this.context();
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return this.constructor.toString().replace('$', '');
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return null;
        }
        sub_visible() {
            const sub = this.sub();
            if (!sub)
                return sub;
            const context = this.context_sub();
            sub.forEach(child => {
                if (child instanceof $mol_view) {
                    child.$ = context;
                }
            });
            return sub;
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        minimal_height() {
            return this.content_height();
        }
        content_height() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_height());
                }
            });
            return min;
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || this.$.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            node.setAttribute('id', this.dom_id());
            $.$mol_dom_render_attributes(node, this.attr_static());
            $.$mol_dom_render_events(node, this.event());
            $.$mol_dom_render_events_async(node, this.event_async());
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                for (let plugin of this.plugins()) {
                    plugin.dom_node(node);
                    plugin.render();
                }
                this.render();
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name });
                if (error instanceof $.$mol_atom_wait)
                    return node;
                try {
                    void (node.innerText = error.message);
                }
                catch (e) { }
                if (error['$mol_atom_catched'])
                    return node;
                console.error(error);
                error['$mol_atom_catched'] = true;
            }
            return node;
        }
        render() {
            const node = this.dom_node();
            const sub = this.sub_visible();
            if (sub)
                $.$mol_dom_render_children(node, sub);
            $.$mol_dom_render_attributes(node, this.attr());
            $.$mol_dom_render_styles(node, this.style());
            const fields = this.field();
            $.$mol_dom_render_fields(node, fields);
            new $.$mol_defer(() => $.$mol_dom_render_fields(node, fields));
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = this.object_host();
            if (owner instanceof $mol_view) {
                const suffix = this.object_field();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                'mol_view_error': false,
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "context", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "content_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        const event_name = self.cordova ? 'deviceready' : 'DOMContentLoaded';
        $.$mol_dom_context.document.addEventListener(event_name, $.$mol_log_group(`$mol_view ${event_name}`, (event) => {
            $.$mol_view.autobind();
            $.$mol_defer.run();
        }));
    }
})($ || ($ = {}));
//view.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next, force) {
            if (next === undefined)
                return [];
            const node = next[0];
            const atom = $.$mol_atom_current();
            new $.$mol_defer(() => {
                if (node)
                    return node.focus();
                const el = atom.cache()[0];
                if (el)
                    el.blur();
            });
            return undefined;
        }
        static position(next, force) {
            if (next !== undefined) {
                var start = next.start;
                var end = next.end;
                if (!(start <= end))
                    throw new Error(`Wrong offsets (${start},${end})`);
                var root = $.$mol_dom_context.document.getElementById(next.id);
                root.focus();
                var range = new Range;
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= start)
                            break;
                        start -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            start = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setStart(cur, start);
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= end)
                            break;
                        end -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            end = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setEnd(cur, end);
                var sel = $.$mol_dom_context.document.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                return next;
            }
            else {
                var sel = $.$mol_dom_context.document.getSelection();
                if (sel.rangeCount === 0)
                    return null;
                var range = sel.getRangeAt(0);
                var el = range.commonAncestorContainer;
                while (el && !el.id)
                    el = el.parentElement;
                if (!el)
                    return { id: null, start: 0, end: 0 };
                var meter = new Range;
                meter.selectNodeContents(el);
                meter.setEnd(range.startContainer, range.startOffset);
                var startOffset = meter.toString().length;
                meter.setEnd(range.endContainer, range.endOffset);
                var endOffset = meter.toString().length;
                return { id: el.id, start: startOffset, end: endOffset };
            }
        }
        static onFocus(event) {
            const parents = [];
            let element = event.target;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            this.focused(parents, $.$mol_atom_force_cache);
        }
        static onBlur(event) {
            const focused = this.focused();
            setTimeout($.$mol_log_group('$mol_view_selection blur', () => {
                if (focused !== this.focused())
                    return;
                this.focused([], $.$mol_atom_force_cache);
            }));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "position", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        $.$mol_dom_context.document.addEventListener('selectionchange', event => {
            $.$mol_view_selection.position(undefined, $.$mol_atom_force_cache);
        });
        $.$mol_dom_context.document.addEventListener('focus', $.$mol_log_group('$mol_view_selection focus', (event) => $.$mol_view_selection.onFocus(event)), true);
        $.$mol_dom_context.document.addEventListener('blur', (event) => $.$mol_view_selection.onBlur(event), true);
    }
})($ || ($ = {}));
//selection.web.js.map
;
"use strict";
//code.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        sub() {
            return [].concat(this.title());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.event_click(next);
                this.click(next);
            }
            event_key_press(event) {
                if (event.keyCode === 13) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : null;
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_theme": "$mol_theme_accent" }));
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//button_types.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        sub() {
            return [].concat(this.Icon(), this.label());
        }
        Icon() {
            return null;
        }
        label() {
            return [].concat(this.Title());
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                return obj;
            })(new this.$.$mol_view);
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            event_click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "d": this.geometry() }));
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        sub() {
            return [].concat(this.Path());
        }
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        path() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_tick);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => {
        $.$mol_state_local.value(event.key, void 0, $.$mol_atom_force_cache);
    });
})($ || ($ = {}));
//local.web.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        var initials;
        function getInitials() {
            if (!initials) {
                initials = new Map();
            }
            return initials;
        }
        function $bw_session(obj, name, descr) {
            const result = $bw_store('session')(obj, name, descr);
            return result;
        }
        $$.$bw_session = $bw_session;
        function $bw_local(obj, name, descr) {
            return $bw_store('local')(obj, name, descr);
        }
        $$.$bw_local = $bw_local;
        function $bw_store(storage_name, need_transform = null) {
            const storage = storage_name == 'session' ? 0 : 1;
            return function bw_storable(obj, name, descr) {
                const value = descr.value;
                let fn_store;
                let fn_restore;
                let fn_equal = obj[name + '_equal'];
                if (typeof fn_equal != 'function')
                    fn_equal = $bw_equal;
                if (need_transform !== false) {
                    fn_store = obj[name + '_store'];
                    fn_restore = obj[name + '_restore'];
                    if (need_transform) {
                        if (typeof fn_store != 'function') {
                            console.error(`REQUIRED ${obj}._store(val: Value): any`);
                        }
                        if (typeof fn_restore != 'function') {
                            console.error(`REQUIRED ${obj}._restore(val_store: any): Value`);
                        }
                    }
                }
                descr.value = function $bw_storage_value(next, need_store) {
                    const host = this;
                    const id = `${host}.${name}()`;
                    const state = (val) => {
                        const val_store = val === void 0 ? void 0 : fn_store ? fn_store.call(obj, val) : val;
                        const result_store = storage === 0 ?
                            this.$.$mol_state_session.value(id, val_store) :
                            this.$.$mol_state_local.value(id, val_store);
                        let result;
                        if (val === void 0) {
                            result = fn_restore ? fn_restore.call(obj, result_store) : result_store;
                        }
                        return result;
                    };
                    let result;
                    let initial;
                    const initials = getInitials();
                    if (next !== void 0) {
                        if (!initials.has(id)) {
                            initial = value.call(host);
                            initials.set(id, initial);
                        }
                        else {
                            initial = initials.get(id);
                        }
                        result = value.apply(host, arguments);
                        if (result === void 0)
                            result = next;
                        const stored = initial !== void 0 && fn_equal.call(obj, result, initial) ? null : result;
                        state(stored);
                    }
                    else {
                        result = value.apply(host, arguments);
                        let is_initial = false;
                        if (!initials.has(id)) {
                            initial = result;
                            initials.set(id, initial);
                            is_initial = true;
                        }
                        else {
                            initial = initials.get(id);
                            is_initial = fn_equal.call(obj, result, initial);
                        }
                        if (is_initial) {
                            const stored = state();
                            if (stored == null) {
                                result = initial;
                            }
                            else {
                                result = value.call(host, stored);
                                if (result === void 0)
                                    result = stored;
                            }
                        }
                    }
                    return result;
                };
                descr.value['value'] = value;
                return descr;
            };
        }
        $$.$bw_store = $bw_store;
        var isArray = Array.isArray;
        var keyList = Object.keys;
        var hasProp = Object.prototype.hasOwnProperty;
        function $bw_equal(a, b) {
            if (a === b)
                return true;
            if (a && b && typeof a == 'object' && typeof b == 'object') {
                var arrA = isArray(a), arrB = isArray(b), i, length, key;
                if (arrA != arrB)
                    return false;
                if (arrA && arrB) {
                    length = a.length;
                    if (length != b.length)
                        return false;
                    for (i = length; i-- !== 0;)
                        if (!$bw_equal(a[i], b[i]))
                            return false;
                    return true;
                }
                let setA = a instanceof Set;
                let setB = b instanceof Set;
                if (setA != setB)
                    return false;
                if (setA && setB)
                    return $bw_equal([...a], [...b]);
                let mapA = a instanceof Map;
                let mapB = b instanceof Map;
                if (mapA != mapB)
                    return false;
                if (mapA && mapB)
                    return $bw_equal([...a], [...b]);
                var dateA = a instanceof Date, dateB = b instanceof Date;
                if (dateA != dateB)
                    return false;
                if (dateA && dateB)
                    return a.getTime() == b.getTime();
                var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
                if (regexpA != regexpB)
                    return false;
                if (regexpA && regexpB)
                    return a.toString() == b.toString();
                var keys = keyList(a);
                length = keys.length;
                if (length !== keyList(b).length)
                    return false;
                for (i = length; i-- !== 0;)
                    if (!hasProp.call(b, keys[i]))
                        return false;
                for (i = length; i-- !== 0;) {
                    key = keys[i];
                    if (!$bw_equal(a[key], b[key]))
                        return false;
                }
                return true;
            }
            return a !== a && b !== b;
        }
        $$.$bw_equal = $bw_equal;
        function $bw_false_on_outside_click(obj, name, descr) {
            const value = descr.value;
            descr.value = function $bw_false_on_outside_click_impl(next, force) {
                const host = this;
                if (next !== void 0) {
                    const outsideClickListener = (event) => {
                        const target = event.target;
                        const selector = '#' + host.dom_id().replace(/([^\w\d_-])/g, '\\$1');
                        const closest = target.closest(selector);
                        if (closest === null) {
                            document.removeEventListener('click', outsideClickListener);
                            value.call(host, false);
                        }
                    };
                    const methodName = next ? 'addEventListener' : 'removeEventListener';
                    document[methodName]('click', outsideClickListener);
                }
                return value.apply(host, arguments);
            };
            descr.value['value'] = value;
        }
        $$.$bw_false_on_outside_click = $bw_false_on_outside_click;
        function plural_word(count, word1, word2_4, word5more) {
            if (word5more === undefined) {
                word5more = word2_4;
            }
            let result = word5more;
            const decimal = Math.floor(count / 10) % 10;
            if (decimal != 1) {
                const unit = count % 10;
                if (unit == 1) {
                    result = word1;
                }
                else if (unit >= 2 && unit <= 4) {
                    result = word2_4;
                }
            }
            return result;
        }
        $$.plural_word = plural_word;
        function smoothScroll(dom_node, scrollTo, after) {
            scrollTo = Math.min(Math.max(0, scrollTo), dom_node.scrollHeight - dom_node.clientHeight);
            let lastScrollTop = dom_node.scrollTop;
            const delta = scrollTo - lastScrollTop;
            if (delta != 0) {
                let lastScrollDelta = 0;
                let isScrolling;
                const scrollListener = () => {
                    if (event.target === dom_node) {
                        const scrollTop = dom_node.scrollTop;
                        lastScrollDelta = scrollTop - lastScrollTop;
                        lastScrollTop = scrollTop;
                        clearTimeout(isScrolling);
                        if (scrollTop == scrollTo) {
                            if (dom_node.stopSmoothScroll) {
                                dom_node.stopSmoothScroll();
                                if (after !== void 0) {
                                    after();
                                }
                            }
                            else {
                                console.error('BUG: unreachable');
                                dom_node.removeEventListener('scroll', scrollListener);
                            }
                        }
                        else if (Math.sign(lastScrollDelta) != Math.sign(delta) ||
                            Math.sign(delta) > 0 && scrollTop > scrollTo ||
                            Math.sign(delta) < 0 && scrollTop < scrollTo) {
                            if (dom_node.stopSmoothScroll) {
                                dom_node.stopSmoothScroll();
                            }
                            else {
                                console.error('BUG: unreachable');
                                dom_node.removeEventListener('scroll', scrollListener);
                            }
                        }
                        else {
                            isScrolling = setTimeout(function () {
                                dom_node.scrollTo({
                                    top: scrollTo,
                                    behavior: 'smooth',
                                });
                            }, 30);
                        }
                    }
                };
                dom_node.addEventListener('scroll', scrollListener);
                if (dom_node.stopSmoothScroll) {
                    dom_node.stopSmoothScroll();
                }
                dom_node.stopSmoothScroll = () => {
                    dom_node.removeEventListener('scroll', scrollListener);
                    delete dom_node.stopSmoothScroll;
                };
                dom_node.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth',
                });
            }
            else if (after !== void 0) {
                after();
            }
        }
        $$.smoothScroll = smoothScroll;
        function adjustOffsetParentScrollTop(obj, opt) {
            const node = obj.dom_node();
            const offsetParent = node.offsetParent;
            const offsetParentClientHeight = node.offsetParent.clientHeight;
            const margin = opt == void 0 ? void 0 : opt.margin;
            const after = opt === void 0 ? void 0 : opt.after;
            const topMargin = margin == void 0 ? 0 : typeof margin === 'number' ? margin : (margin.top || 0);
            const bottomMargin = margin == void 0 ? 0 : typeof margin === 'number' ? margin : (margin.bottom || 0);
            const offsetTop = node.offsetTop - topMargin;
            const offsetBottom = offsetTop + node.offsetHeight + topMargin + bottomMargin;
            const scrollTop = offsetParent.scrollTop;
            const scrollBottom = scrollTop + offsetParent.clientHeight;
            if (offsetTop < scrollTop) {
                smoothScroll(offsetParent, offsetTop, after);
            }
            else if (offsetTop > scrollTop && offsetBottom > scrollBottom) {
                const deltaTop = offsetTop - scrollTop;
                const deltaBottom = offsetBottom - scrollBottom;
                const scrollTo = scrollTop + Math.min(deltaTop, deltaBottom);
                smoothScroll(offsetParent, scrollTo, after);
            }
        }
        $$.adjustOffsetParentScrollTop = adjustOffsetParentScrollTop;
        function actualOffsetTop(fromEl, toEl, silent = false) {
            if (fromEl instanceof $.$mol_view)
                fromEl = fromEl.dom_node();
            if (toEl instanceof $.$mol_view)
                toEl = toEl.dom_node();
            let result = 0;
            while (true) {
                result += fromEl.offsetTop;
                const offsetParent = fromEl.offsetParent;
                if (!offsetParent) {
                    if (!silent) {
                        console.error({ msg: 'fromEl is not descendant of toEl', fromEl, toEl });
                        console.trace();
                    }
                    return null;
                }
                else if (offsetParent === toEl) {
                    return result;
                }
                else {
                    fromEl = offsetParent;
                    const delta = fromEl.offsetHeight - fromEl.clientHeight;
                    result += delta;
                }
            }
        }
        $$.actualOffsetTop = actualOffsetTop;
        function do_autofocus(obj) {
            new $.$mol_defer(() => {
                let autofocusElement = obj.dom_node().querySelector('[autofocus]');
                if (autofocusElement) {
                    autofocusElement.focus();
                }
                else {
                    let autofocusElement = obj.dom_node().querySelector('[bw_autofocus]');
                    if (autofocusElement) {
                        autofocusElement.focus();
                    }
                }
            });
        }
        $$.do_autofocus = do_autofocus;
        function $bw_is_self_or_descendant(testNode, targetNode) {
            let result = false;
            while (testNode) {
                result = testNode == targetNode;
                if (result)
                    break;
                testNode = testNode.parentNode;
            }
            return result;
        }
        $$.$bw_is_self_or_descendant = $bw_is_self_or_descendant;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bw.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_http extends $.$mol_object {
        static resource(uri) {
            const resolver = $.$mol_dom_context.document.createElement('a');
            resolver.href = uri;
            return this.resource_absolute(resolver.href);
        }
        static resource_absolute(uri) {
            return $mol_http.make({
                uri: $.$mol_const(uri)
            });
        }
        uri() { return ''; }
        method_get() { return 'Get'; }
        method_put() { return 'Put'; }
        credentials() {
            return null;
        }
        headers() {
            return {};
        }
        response_type() {
            return '';
        }
        request() {
            if (this['request()'])
                return this['request()'];
            var next = this['request()'] = new $.$mol_dom_context.XMLHttpRequest;
            next.withCredentials = Boolean(this.credentials());
            next.onload = $.$mol_log_group(this.object_id() + ' load', (event) => {
                if ((next.status === 0) || (Math.floor(next.status / 100) === 2)) {
                    this.response(next, $.$mol_atom_force_cache);
                }
                else {
                    this.response(new Error(next.statusText || next.responseText || `HTTP error ${next.status}`), $.$mol_atom_force_cache);
                }
            });
            next.onerror = $.$mol_log_group(this.object_id() + ' error', (event) => {
                const right_event = event;
                new $.$mol_defer(() => {
                    this.response(right_event.error || new Error('Unknown HTTP error'), $.$mol_atom_force_cache);
                });
            });
            return next;
        }
        destructor() {
            const native = this['request()'];
            if (native)
                native.abort();
        }
        response(next, force) {
            const creds = this.credentials();
            const native = this.request();
            const method = (next === void 0) ? this.method_get() : this.method_put();
            const uri = this.uri();
            native.open(method, uri, true, creds && creds.login, creds && creds.password);
            native.responseType = this.response_type();
            const headers = this.headers();
            for (let name in headers)
                native.setRequestHeader(name, headers[name]);
            native.send(...$.$mol_maybe(next));
            return $.$mol_fail_hidden(new $.$mol_atom_wait(`${method} ${uri}`));
        }
        text(next, force) {
            return this.response(next, force).responseText;
        }
        xml(next, force) {
            return this.response(next, force).responseXML;
        }
        json(next, force) {
            const next2 = next && JSON.stringify(next, null, '\t');
            return JSON.parse(this.text(next2, force));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_http.prototype, "response", null);
    __decorate([
        $.$mol_mem
    ], $mol_http.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_http, "resource_absolute", null);
    $.$mol_http = $mol_http;
})($ || ($ = {}));
//http.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return function (host, field, descr) {
            const value = descr.value;
            descr.value = function $mol_deprecated_wrapper() {
                console.warn(`${host.constructor}::${field} is deprecated. ${message}`);
                return value.apply(this, arguments);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_http_resource extends $.$mol_http {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource, "item", null);
    $.$mol_http_resource = $mol_http_resource;
    class $mol_http_resource_json {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource_json, "item", null);
    $.$mol_http_resource_json = $mol_http_resource_json;
})($ || ($ = {}));
//resource.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            var Base = this.constructor;
            var formatter = Base.formatter(pattern);
            return formatter.call(Base, this);
        }
    }
    $mol_time_base.patterns = {};
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
    }
    $mol_time_duration.patterns = {
        '#Y': (duration) => {
            if (!duration.year)
                return '';
            return duration.year + 'Y';
        },
        '#M': (duration) => {
            if (!duration.month)
                return '';
            return duration.month + 'M';
        },
        '#D': (duration) => {
            if (!duration.day)
                return '';
            return duration.day + 'D';
        },
        '#h': (duration) => {
            if (!duration.hour)
                return '';
            return duration.hour + 'H';
        },
        '#m': (duration) => {
            if (!duration.minute)
                return '';
            return duration.minute + 'M';
        },
        '#s': (duration) => {
            if (!duration.second)
                return '';
            return duration.second + 'S';
        },
        '+hh': (duration) => {
            var hour = duration.hour;
            var sign = '+';
            if (hour < 0) {
                sign = '-';
                hour = -hour;
            }
            return (hour < 10)
                ? (sign + '0' + hour)
                : (sign + hour);
        },
        'mm': (duration) => {
            return (duration.minute < 10)
                ? ('0' + duration.minute)
                : String(duration.minute);
        },
    };
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                var parsed = /^(?:(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d))?)?)?(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d(?:\.\d\d\d)?))?)?(Z|[\+\-]\d\d(?::?(?:\d\d)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = Number(parsed[1]);
                if (parsed[2])
                    this.month = Number(parsed[2]) - 1;
                if (parsed[3])
                    this.day = Number(parsed[3]) - 1;
                if (parsed[4])
                    this.hour = Number(parsed[4]);
                if (parsed[5])
                    this.minute = Number(parsed[5]);
                if (parsed[6])
                    this.second = Number(parsed[6]);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                var offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            if (config.offset !== undefined)
                this.offset = config.offset && new $.$mol_time_duration(config.offset);
        }
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        get native() {
            if (this._native)
                return this._native;
            var utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC((utc.year || 0), (utc.month || 0), (utc.day || 0) + 1, (utc.hour || 0), (utc.minute || 0), (utc.second && Math.floor(utc.second) || 0), (utc.second && Math.floor((utc.second - Math.floor(utc.second)) * 1000) || 0)));
        }
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: (this.year === undefined) ? undefined : moment.year,
                month: (this.month === undefined) ? undefined : moment.month,
                day: (this.day === undefined) ? undefined : moment.day,
                hour: (this.hour === undefined) ? undefined : moment.hour,
                minute: (this.minute === undefined) ? undefined : moment.minute,
                second: (this.second === undefined) ? undefined : moment.second,
                offset: (this.offset === undefined) ? undefined : moment.offset,
            });
        }
        merge(config) {
            var moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: (moment.year === undefined) ? this.year : moment.year,
                month: (moment.month === undefined) ? this.month : moment.month,
                day: (moment.day === undefined) ? this.day : moment.day,
                hour: (moment.hour === undefined) ? this.hour : moment.hour,
                minute: (moment.minute === undefined) ? this.minute : moment.minute,
                second: (moment.second === undefined) ? this.second : moment.second,
                offset: (moment.offset === undefined) ? this.offset : moment.offset,
            });
        }
        shift(config) {
            var duration = new $.$mol_time_duration(config);
            var moment = new $mol_time_moment().merge(this);
            var second = (moment.second + (duration.second || 0));
            var native = new Date(moment.year + (duration.year || 0), moment.month + (duration.month || 0), moment.day + 1 + (duration.day || 0), moment.hour + (duration.hour || 0), moment.minute + (duration.minute || 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: (this.year === undefined) ? undefined : native.getFullYear(),
                month: (this.month === undefined) ? undefined : native.getMonth(),
                day: (this.day === undefined) ? undefined : native.getDate() - 1,
                hour: (this.hour === undefined) ? undefined : native.getHours(),
                minute: (this.minute === undefined) ? undefined : native.getMinutes(),
                second: (this.second === undefined) ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            const moment = this.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
    }
    $mol_time_moment.patterns = {
        'YYYY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year);
        },
        'AD': (moment) => {
            if (moment.year == null)
                return '';
            return String(Math.floor(moment.year / 100) + 1);
        },
        'YY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year % 100);
        },
        'Month': (moment) => {
            if (moment.month == null)
                return '';
            return moment.native.toLocaleString(undefined, { month: 'long' });
        },
        'DD Month': (moment) => {
            return moment.native.toLocaleString(undefined, { day: '2-digit', month: 'long' });
        },
        'D Month': (moment) => {
            return moment.native.toLocaleString(undefined, { day: 'numeric', month: 'long' });
        },
        'Mon': (moment) => {
            if (moment.month == null)
                return '';
            return moment.native.toLocaleString(undefined, { month: 'short' });
        },
        'DD Mon': (moment) => {
            return moment.native.toLocaleString(undefined, { day: '2-digit', month: 'short' });
        },
        'D Mon': (moment) => {
            return moment.native.toLocaleString(undefined, { day: 'numeric', month: 'short' });
        },
        '-MM': (moment) => {
            if (moment.month == null)
                return '';
            return '-' + $mol_time_moment.patterns['MM'](moment);
        },
        'MM': (moment) => {
            if (moment.month == null)
                return '';
            var month = moment.month + 1;
            return (month < 10)
                ? ('0' + month)
                : ('' + month);
        },
        'M': (moment) => {
            if (moment.month == null)
                return '';
            return String(moment.month + 1);
        },
        'WeekDay': (moment) => {
            if (moment.weekday == null)
                return '';
            return moment.native.toLocaleString(undefined, { weekday: 'long' });
        },
        'WD': (moment) => {
            if (moment.weekday == null)
                return '';
            return moment.native.toLocaleString(undefined, { weekday: 'short' });
        },
        '-DD': (moment) => {
            if (moment.day == null)
                return '';
            return '-' + $mol_time_moment.patterns['DD'](moment);
        },
        'DD': (moment) => {
            if (moment.day == null)
                return '';
            var day = moment.day + 1;
            return (day < 10)
                ? ('0' + day)
                : String(day);
        },
        'D': (moment) => {
            if (moment.day == null)
                return '';
            return String(moment.day + 1);
        },
        'Thh': (moment) => {
            if (moment.hour == null)
                return '';
            return 'T' + $mol_time_moment.patterns['hh'](moment);
        },
        'hh': (moment) => {
            if (moment.hour == null)
                return '';
            return (moment.hour < 10)
                ? ('0' + moment.hour)
                : String(moment.hour);
        },
        'h': (moment) => {
            if (moment.hour == null)
                return '';
            return String(moment.hour);
        },
        ':mm': (moment) => {
            if (moment.minute == null)
                return '';
            return ':' + $mol_time_moment.patterns['mm'](moment);
        },
        'mm': (moment) => {
            if (moment.minute == null)
                return '';
            return (moment.minute < 10)
                ? ('0' + moment.minute)
                : String(moment.minute);
        },
        'm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(moment.minute);
        },
        ':ss': (moment) => {
            if (moment.second == null)
                return '';
            return ':' + $mol_time_moment.patterns['ss'](moment);
        },
        'ss': (moment) => {
            if (moment.second == null)
                return '';
            var second = Math.floor(moment.second);
            return (second < 10)
                ? ('0' + second)
                : String(second);
        },
        's': (moment) => {
            if (moment.second == null)
                return '';
            return String(Math.floor(moment.second));
        },
        '.sss': (moment) => {
            if (moment.second == null)
                return '';
            if (moment.second - Math.floor(moment.second) === 0)
                return '';
            return '.' + $mol_time_moment.patterns['sss'](moment);
        },
        'sss': (moment) => {
            if (moment.second == null)
                return '';
            var millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
            return (millisecond < 10)
                ? ('00' + millisecond)
                : (millisecond < 100)
                    ? ('0' + millisecond)
                    : String(millisecond);
        },
        'Z': (moment) => {
            var offset = moment.offset;
            if (!offset)
                return '';
            return offset.toString('+hh:mm');
        }
    };
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $.$mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $.$mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $.$mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $.$mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $.$mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $.$mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $.$mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $.$mol_time_duration(config.duration);
        }
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $.$mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));
//interval.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $tg_app extends $.$mol_view {
        sub() {
            return [].concat(this.Charts(), this.Switch());
        }
        Charts() {
            return ((obj) => {
                obj.sub = () => this.charts();
                return obj;
            })(new this.$.$mol_view);
        }
        charts() {
            return [];
        }
        Switch() {
            return ((obj) => {
                obj.sub = () => [].concat(this.check());
                return obj;
            })(new this.$.$mol_view);
        }
        check() {
            return ((obj) => {
                obj.title = () => this.switch_title();
                obj.checked = (val) => this.is_night_mode(val);
                return obj;
            })(new this.$.$mol_check);
        }
        switch_title() {
            return "Switch to Night Mode";
        }
        is_night_mode(val, force) {
            return (val !== void 0) ? val : false;
        }
        attr() {
            return ({
                "mol_theme": this.mol_theme(),
            });
        }
        mol_theme() {
            return this.is_night_mode();
        }
        ChartContainer(idx) {
            return ((obj) => {
                obj.columns = () => this.columns(idx);
                obj.header = () => this.header(idx);
                return obj;
            })(new this.$.$tg_chart_container);
        }
        columns(idx) {
            return null;
        }
        header(idx) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_app.prototype, "Charts", null);
    __decorate([
        $.$mol_mem
    ], $tg_app.prototype, "Switch", null);
    __decorate([
        $.$mol_mem
    ], $tg_app.prototype, "check", null);
    __decorate([
        $.$mol_mem
    ], $tg_app.prototype, "is_night_mode", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_app.prototype, "ChartContainer", null);
    $.$tg_app = $tg_app;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_container extends $.$mol_view {
        columns() {
            return null;
        }
        header() {
            return "";
        }
        sub() {
            return [].concat(this.Header(), this.Body());
        }
        Header() {
            return ((obj) => {
                obj.sub = () => [].concat(this.header());
                return obj;
            })(new this.$.$mol_view);
        }
        Body() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Chart());
                return obj;
            })(new this.$.$mol_view);
        }
        Chart() {
            return ((obj) => {
                obj.columns = () => this.columns();
                return obj;
            })(new this.$.$tg_chart);
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart_container.prototype, "Header", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_container.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_container.prototype, "Chart", null);
    $.$tg_chart_container = $tg_chart_container;
})($ || ($ = {}));
(function ($) {
    class $tg_chart extends $.$mol_view {
        columns() {
            return null;
        }
        exclude_names() {
            return this.CheckBar().exclude_names();
        }
        sub() {
            return [].concat(this.Header(), this.SelectedArea(), this.Selector(), this.CheckBar());
        }
        Header() {
            return ((obj) => {
                obj.sub = () => [].concat("Followers");
                return obj;
            })(new this.$.$mol_view);
        }
        SelectedArea() {
            return ((obj) => {
                obj.columns = () => this.columns();
                obj.left = () => this.left();
                obj.right = () => this.right();
                obj.exclude_names = () => this.exclude_names();
                return obj;
            })(new this.$.$tg_chart_selected_area);
        }
        left() {
            return this.Selector().left();
        }
        right() {
            return this.Selector().right();
        }
        Selector() {
            return ((obj) => {
                obj.columns = () => this.columns();
                obj.exclude_names = () => this.exclude_names();
                return obj;
            })(new this.$.$tg_chart_selector);
        }
        CheckBar() {
            return ((obj) => {
                obj.columns = () => this.columns();
                return obj;
            })(new this.$.$tg_chart_check_bar);
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart.prototype, "Header", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart.prototype, "SelectedArea", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart.prototype, "Selector", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart.prototype, "CheckBar", null);
    $.$tg_chart = $tg_chart;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_check_bar extends $.$mol_view {
        columns() {
            return null;
        }
        exclude_names(val, force) {
            return (val !== void 0) ? val : null;
        }
        sub() {
            return this.checkboxes();
        }
        checkboxes() {
            return [];
        }
        Checkbox(name) {
            return ((obj) => {
                obj.title = () => this.checkbox_title(name);
                obj.color = () => this.color(name);
                obj.checked = (val) => this.checked(name, val);
                return obj;
            })(new this.$.$tg_chart_check_box);
        }
        checkbox_title(name) {
            return "";
        }
        color(name) {
            return "";
        }
        checked(name, val, force) {
            return (val !== void 0) ? val : true;
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart_check_bar.prototype, "exclude_names", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_check_bar.prototype, "Checkbox", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_check_bar.prototype, "checked", null);
    $.$tg_chart_check_bar = $tg_chart_check_bar;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_check_box extends $.$mol_check {
        color() {
            return "";
        }
        IconNonChecked() {
            return ((obj) => {
                obj.view_box = () => "0 0 180 180";
                obj.sub = () => [].concat(this.CircleNonChecked());
                return obj;
            })(new this.$.$mol_svg_root);
        }
        CircleNonChecked() {
            return ((obj) => {
                obj.size = () => 180;
                obj.stroke_width = () => 15;
                obj.stroke = () => this.color();
                return obj;
            })(new this.$.$tg_svg_circle);
        }
        IconChecked() {
            return ((obj) => {
                obj.view_box = () => "0 0 180 180";
                obj.sub = () => [].concat(this.CircleChecked(), this.Tick());
                return obj;
            })(new this.$.$mol_svg_root);
        }
        CircleChecked() {
            return ((obj) => {
                obj.size = () => 180;
                obj.stroke_width = () => 0;
                obj.fill = () => this.color();
                return obj;
            })(new this.$.$tg_svg_circle);
        }
        Tick() {
            return ((obj) => {
                return obj;
            })(new this.$.$tg_svg_tick);
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart_check_box.prototype, "IconNonChecked", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_check_box.prototype, "CircleNonChecked", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_check_box.prototype, "IconChecked", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_check_box.prototype, "CircleChecked", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_check_box.prototype, "Tick", null);
    $.$tg_chart_check_box = $tg_chart_check_box;
})($ || ($ = {}));
(function ($) {
    class $tg_svg_tick extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "d": "M54 100 L76 120 L126 72", "stroke": "white", "stroke-width": "18", "stroke-linecap": "round", "stroke-linejoin": "round", "fill": "transparent" }));
        }
    }
    $.$tg_svg_tick = $tg_svg_tick;
})($ || ($ = {}));
(function ($) {
    class $tg_svg_circle extends $.$mol_svg {
        size() {
            return 0;
        }
        stroke_width() {
            return 0;
        }
        stroke() {
            return "";
        }
        fill() {
            return "transparent";
        }
        transform() {
            return null;
        }
        stroke_opacity() {
            return 1;
        }
        fill_opacity() {
            return 1;
        }
        dom_name() {
            return "circle";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "r": this.r(), "cx": this.cx(), "cy": this.cy(), "stroke": this.stroke(), "stroke-width": this.stroke_width(), "stroke-opacity": this.stroke_opacity(), "fill-opacity": this.fill_opacity(), "fill": this.fill(), "transform": this.transform() }));
        }
        r() {
            return 0;
        }
        cx() {
            return 0;
        }
        cy() {
            return 0;
        }
    }
    $.$tg_svg_circle = $tg_svg_circle;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_selected_area extends $.$mol_view {
        exclude_names() {
            return null;
        }
        columns() {
            return null;
        }
        left() {
            return null;
        }
        right() {
            return null;
        }
        sub() {
            return [].concat(this.Levels(), this.Graph(), this.InspectInfo(), this.DatesWrapper());
        }
        Levels() {
            return ((obj) => {
                obj.sub = () => this.levels();
                return obj;
            })(new this.$.$mol_view);
        }
        levels() {
            return [];
        }
        day_inspect() {
            return this.Graph().day_inspect();
        }
        Graph() {
            return ((obj) => {
                obj.left = () => this.left();
                obj.right = () => this.right();
                obj.stroke_width = () => 3;
                obj.need_inspect_day = () => true;
                return obj;
            })(new this.$.$tg_chart_graph);
        }
        info_width() {
            return this.InspectInfo().width();
        }
        info_height() {
            return this.InspectInfo().height();
        }
        InspectInfo() {
            return ((obj) => {
                obj.day_inspect = () => this.day_inspect();
                obj.top = () => this.info_top();
                obj.left = () => this.info_left();
                return obj;
            })(new this.$.$tg_chart_inspect_info);
        }
        info_top() {
            return 0;
        }
        info_left() {
            return 0;
        }
        DatesWrapper() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Dates());
                obj.field = () => ({
                    "scrollLeft": this.scroll_left(),
                });
                return obj;
            })(new this.$.$mol_view);
        }
        Dates() {
            return ((obj) => {
                obj.sub = () => this.dates();
                obj.style = () => ({
                    "width": this.dates_width(),
                });
                return obj;
            })(new this.$.$mol_view);
        }
        dates() {
            return [];
        }
        dates_width() {
            return 0;
        }
        scroll_left() {
            return 0;
        }
        info_pos() {
            return null;
        }
        size(val, force) {
            return (val !== void 0) ? val : null;
        }
        width() {
            return null;
        }
        height() {
            return null;
        }
        DateLabel(config) {
            return ((obj) => {
                obj.left = () => this.date_label_left(config);
                obj.width = () => this.date_label_width(config);
                obj.text = () => this.date_label_text(config);
                return obj;
            })(new this.$.$tg_chart_date_label);
        }
        date_label_left(config) {
            return 0;
        }
        date_label_width(config) {
            return 0;
        }
        date_label_text(config) {
            return "";
        }
        Level(config) {
            return ((obj) => {
                obj.text = () => this.level_text(config);
                obj.height = () => this.level_height(config);
                obj.top = () => this.level_top(config);
                return obj;
            })(new this.$.$tg_chart_level);
        }
        level_text(config) {
            return "";
        }
        level_height(config) {
            return 0;
        }
        level_top(config) {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart_selected_area.prototype, "Levels", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selected_area.prototype, "Graph", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selected_area.prototype, "InspectInfo", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selected_area.prototype, "DatesWrapper", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selected_area.prototype, "Dates", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selected_area.prototype, "size", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_selected_area.prototype, "DateLabel", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_selected_area.prototype, "Level", null);
    $.$tg_chart_selected_area = $tg_chart_selected_area;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_level extends $.$mol_view {
        top() {
            return 0;
        }
        height() {
            return 0;
        }
        text() {
            return "";
        }
        style() {
            return ({
                "top": this.top(),
                "height": this.height(),
            });
        }
        sub() {
            return [].concat(this.Label());
        }
        Label() {
            return ((obj) => {
                obj.sub = () => [].concat(this.text());
                return obj;
            })(new this.$.$mol_view);
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart_level.prototype, "Label", null);
    $.$tg_chart_level = $tg_chart_level;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_date_label extends $.$mol_view {
        style() {
            return ({
                "width": this.width(),
                "left": this.left(),
            });
        }
        width() {
            return 0;
        }
        left() {
            return 0;
        }
        sub() {
            return [].concat(this.text());
        }
        text() {
            return "";
        }
    }
    $.$tg_chart_date_label = $tg_chart_date_label;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_inspect_info extends $.$mol_view {
        day_inspect() {
            return null;
        }
        columns() {
            return null;
        }
        exclude_names() {
            return null;
        }
        style() {
            return ({
                "top": this.top(),
                "left": this.left(),
            });
        }
        top() {
            return 0;
        }
        left() {
            return 0;
        }
        sub() {
            return [].concat(this.Header(), this.Values());
        }
        Header() {
            return ((obj) => {
                obj.sub = () => [].concat(this.day_inspect_as_date());
                return obj;
            })(new this.$.$mol_view);
        }
        day_inspect_as_date() {
            return "";
        }
        Values() {
            return ((obj) => {
                obj.sub = () => this.values();
                return obj;
            })(new this.$.$mol_view);
        }
        values() {
            return [];
        }
        Value(name) {
            return ((obj) => {
                obj.style = () => ({
                    "color": this.color(name),
                });
                obj.sub = () => [].concat(this.Count(name), this.Title(name));
                return obj;
            })(new this.$.$mol_view);
        }
        color(name) {
            return "";
        }
        Count(name) {
            return ((obj) => {
                obj.sub = () => [].concat(this.count(name));
                return obj;
            })(new this.$.$mol_view);
        }
        count(name) {
            return "";
        }
        Title(name) {
            return ((obj) => {
                obj.sub = () => [].concat(this.line_title(name));
                return obj;
            })(new this.$.$mol_view);
        }
        line_title(name) {
            return "";
        }
        width(val, force) {
            return (val !== void 0) ? val : null;
        }
        height(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart_inspect_info.prototype, "Header", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_inspect_info.prototype, "Values", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_inspect_info.prototype, "Value", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_inspect_info.prototype, "Count", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_inspect_info.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_inspect_info.prototype, "width", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_inspect_info.prototype, "height", null);
    $.$tg_chart_inspect_info = $tg_chart_inspect_info;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_graph extends $.$mol_view {
        style() {
            return ({
                "width": this.graph_width(),
                "height": this.graph_height(),
            });
        }
        graph_width() {
            return 0;
        }
        graph_height() {
            return 0;
        }
        left() {
            return null;
        }
        right() {
            return null;
        }
        stroke_width() {
            return 1;
        }
        need_inspect_day() {
            return false;
        }
        event() {
            return ({
                "mousemove": (event) => this.event_mousemove(event),
                "mouseleave": (event) => this.event_mouseleave(event),
            });
        }
        event_mousemove(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_mouseleave(event, force) {
            return (event !== void 0) ? event : null;
        }
        inspect_x(val, force) {
            return (val !== void 0) ? val : null;
        }
        day_inspect() {
            return null;
        }
        is_fixed_inspect(val, force) {
            return (val !== void 0) ? val : false;
        }
        sub() {
            return [].concat(this.Svg());
        }
        Svg() {
            return ((obj) => {
                obj.view_box = () => this.view_box();
                obj.aspect = () => "none";
                obj.sub = () => [].concat(this.polylines(), this.InspectLine(), this.inspect_circles());
                return obj;
            })(new this.$.$mol_svg_root);
        }
        view_box() {
            return "";
        }
        polylines() {
            return [];
        }
        inspect_circles() {
            return [];
        }
        view_box_height(val, force) {
            return (val !== void 0) ? val : null;
        }
        Path(name) {
            return ((obj) => {
                obj.d = () => this.d(name);
                obj.transform = () => this.transform();
                obj.stroke = () => this.line_color(name);
                obj.stroke_opacity = () => this.polyline_opacity(name);
                obj.stroke_width = () => this.stroke_width();
                return obj;
            })(new this.$.$tg_svg_path);
        }
        d(name) {
            return "";
        }
        transform() {
            return "";
        }
        line_color(name) {
            return "";
        }
        polyline_opacity(name, val, force) {
            return (val !== void 0) ? val : null;
        }
        Polyline(name) {
            return ((obj) => {
                obj.points = () => this.points(name);
                obj.transform = () => this.transform();
                obj.stroke = () => this.line_color(name);
                obj.stroke_opacity = () => this.polyline_opacity(name);
                obj.stroke_width = () => this.stroke_width();
                return obj;
            })(new this.$.$tg_svg_polyline);
        }
        points(name) {
            return "";
        }
        InspectCircle(name) {
            return ((obj) => {
                obj.x = () => this.inspect_circle_x();
                obj.y = () => this.inspect_circle_y(name);
                obj.width = () => this.inspect_circle_width();
                obj.height = () => this.inspect_circle_height();
                obj.sub = () => [].concat(this.Circle(name));
                return obj;
            })(new this.$.$tg_svg_root);
        }
        inspect_circle_x() {
            return 0;
        }
        inspect_circle_y(name) {
            return 0;
        }
        inspect_circle_width() {
            return 0;
        }
        inspect_circle_height() {
            return 0;
        }
        Circle(name) {
            return ((obj) => {
                obj.stroke = () => this.line_color(name);
                obj.stroke_width = () => 20;
                obj.cx = () => 50;
                obj.cy = () => 50;
                obj.r = () => 40;
                return obj;
            })(new this.$.$tg_svg_circle);
        }
        inspect_circle_size() {
            return 30;
        }
        InspectLine() {
            return ((obj) => {
                obj.x1 = () => this.day_inspect();
                obj.x2 = () => this.day_inspect();
                obj.y1 = () => 0;
                obj.y2 = () => this.view_box_height();
                obj.stroke_width = () => this.inspect_stroke_width();
                return obj;
            })(new this.$.$tg_svg_line);
        }
        inspect_stroke_width() {
            return 1;
        }
        size(val, force) {
            return (val !== void 0) ? val : null;
        }
        width() {
            return null;
        }
        height() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart_graph.prototype, "event_mousemove", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_graph.prototype, "event_mouseleave", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_graph.prototype, "inspect_x", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_graph.prototype, "is_fixed_inspect", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_graph.prototype, "Svg", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_graph.prototype, "view_box_height", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_graph.prototype, "Path", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_graph.prototype, "polyline_opacity", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_graph.prototype, "Polyline", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_graph.prototype, "InspectCircle", null);
    __decorate([
        $.$mol_mem_key
    ], $tg_chart_graph.prototype, "Circle", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_graph.prototype, "InspectLine", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_graph.prototype, "size", null);
    $.$tg_chart_graph = $tg_chart_graph;
})($ || ($ = {}));
(function ($) {
    class $tg_svg_root extends $.$mol_svg_root {
        aspect() {
            return "none";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "x": this.x(), "y": this.y(), "width": this.width(), "height": this.height() }));
        }
        x() {
            return null;
        }
        y() {
            return null;
        }
        width() {
            return null;
        }
        height() {
            return null;
        }
    }
    $.$tg_svg_root = $tg_svg_root;
})($ || ($ = {}));
(function ($) {
    class $tg_svg_line extends $.$mol_svg {
        dom_name() {
            return "line";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "x1": this.x1(), "x2": this.x2(), "y1": this.y1(), "y2": this.y2(), "stroke-width": this.stroke_width(), "stroke": this.stroke() }));
        }
        x1() {
            return 0;
        }
        x2() {
            return 0;
        }
        y1() {
            return 0;
        }
        y2() {
            return 0;
        }
        stroke_width() {
            return 1;
        }
        stroke() {
            return null;
        }
    }
    $.$tg_svg_line = $tg_svg_line;
})($ || ($ = {}));
(function ($) {
    class $tg_svg_polyline extends $.$mol_svg {
        dom_name() {
            return "polyline";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "points": this.points(), "transform": this.transform(), "stroke-width": this.stroke_width(), "stroke": this.stroke(), "stroke-opacity": this.stroke_opacity(), "vector-effect": "non-scaling-stroke" }));
        }
        points() {
            return "";
        }
        transform() {
            return "";
        }
        stroke_width() {
            return 1;
        }
        stroke() {
            return "blue";
        }
        stroke_opacity() {
            return 1;
        }
    }
    $.$tg_svg_polyline = $tg_svg_polyline;
})($ || ($ = {}));
(function ($) {
    class $tg_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "d": this.d(), "transform": this.transform(), "stroke-width": this.stroke_width(), "stroke": this.stroke(), "stroke-opacity": this.stroke_opacity(), "vector-effect": "non-scaling-stroke" }));
        }
        d() {
            return "";
        }
        transform() {
            return "";
        }
        stroke_width() {
            return 1;
        }
        stroke() {
            return "blue";
        }
        stroke_opacity() {
            return 1;
        }
    }
    $.$tg_svg_path = $tg_svg_path;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_selector extends $.$mol_view {
        exclude_names() {
            return null;
        }
        left() {
            return null;
        }
        right() {
            return null;
        }
        columns() {
            return null;
        }
        sub() {
            return [].concat(this.Graph(), this.LeftSpace(), this.LeftLeftResize(), this.Selected(), this.RightSpace(), this.RightRightResize());
        }
        Graph() {
            return ((obj) => {
                return obj;
            })(new this.$.$tg_chart_graph);
        }
        LeftSpace() {
            return ((obj) => {
                obj.width = () => this.left_width();
                return obj;
            })(new this.$.$tg_chart_selector_space);
        }
        left_width(val, force) {
            return (val !== void 0) ? val : null;
        }
        LeftLeftResize() {
            return ((obj) => {
                obj.style = () => ({
                    "top": this.outer_resize_top(),
                    "height": this.resize_width(),
                    "width": this.resize_width(),
                    "left": this.left_left_resize_left(),
                });
                obj.view_box = () => "-50 0 100 100";
                obj.sub = () => [].concat(this.LeftLeftResizeCircle());
                return obj;
            })(new this.$.$mol_svg_root);
        }
        outer_resize_top() {
            return 0;
        }
        resize_width() {
            return 0;
        }
        left_left_resize_left() {
            return 0;
        }
        LeftLeftResizeCircle() {
            return ((obj) => {
                obj.size = () => 100;
                obj.r = () => this.left_resize_radius();
                obj.fill_opacity = () => this.left_resize_opacity();
                return obj;
            })(new this.$.$tg_svg_circle);
        }
        Selected() {
            return ((obj) => {
                obj.width = () => this.selected_width();
                obj.sub = () => [].concat(this.Left(), this.Mid(), this.Right());
                return obj;
            })(new this.$.$tg_chart_selector_space);
        }
        selected_width(val, force) {
            return (val !== void 0) ? val : null;
        }
        Left() {
            return ((obj) => {
                obj.style = () => ({
                    "cursor": this.cursor_non_mid(),
                });
                obj.event = () => ({
                    "mousedown": (event) => this.left_mousedown(event),
                });
                obj.sub = () => [].concat(this.LeftRightResize());
                return obj;
            })(new this.$.$mol_view);
        }
        cursor_non_mid(val, force) {
            return (val !== void 0) ? val : "col-resize";
        }
        left_mousedown(event, force) {
            return (event !== void 0) ? event : null;
        }
        LeftRightResize() {
            return ((obj) => {
                obj.style = () => ({
                    "top": this.inner_resize_top(),
                    "height": this.resize_width(),
                    "width": this.resize_width(),
                    "left": this.left_right_resize_left(),
                });
                obj.view_box = () => "50 0 100 100";
                obj.sub = () => [].concat(this.LeftRightResizeCircle());
                return obj;
            })(new this.$.$mol_svg_root);
        }
        inner_resize_top() {
            return 0;
        }
        left_right_resize_left() {
            return 0;
        }
        LeftRightResizeCircle() {
            return ((obj) => {
                obj.size = () => 100;
                obj.r = () => this.left_resize_radius();
                obj.fill_opacity = () => this.left_resize_opacity();
                return obj;
            })(new this.$.$tg_svg_circle);
        }
        Mid() {
            return ((obj) => {
                obj.event = () => ({
                    "mousedown": (event) => this.mid_mousedown(event),
                });
                obj.style = () => ({
                    "cursor": this.cursor_mid(),
                });
                obj.sub = () => [].concat(this.Grab());
                return obj;
            })(new this.$.$mol_view);
        }
        mid_mousedown(event, force) {
            return (event !== void 0) ? event : null;
        }
        cursor_mid(val, force) {
            return (val !== void 0) ? val : "grab";
        }
        Grab() {
            return ((obj) => {
                obj.style = () => ({
                    "top": this.inner_resize_top(),
                    "height": this.resize_width(),
                    "width": this.resize_width(),
                    "left": this.grab_left(),
                });
                obj.view_box = () => "0 0 100 100";
                obj.sub = () => [].concat(this.GrabCircle());
                return obj;
            })(new this.$.$mol_svg_root);
        }
        grab_left() {
            return 0;
        }
        GrabCircle() {
            return ((obj) => {
                obj.size = () => 100;
                obj.r = () => this.grab_radius();
                obj.fill_opacity = () => this.grab_opacity();
                return obj;
            })(new this.$.$tg_svg_circle);
        }
        grab_radius(val, force) {
            return (val !== void 0) ? val : 0;
        }
        grab_opacity(val, force) {
            return (val !== void 0) ? val : 0;
        }
        Right() {
            return ((obj) => {
                obj.style = () => ({
                    "cursor": this.cursor_non_mid(),
                });
                obj.event = () => ({
                    "mousedown": (event) => this.right_mousedown(event),
                });
                obj.sub = () => [].concat(this.RightLeftResize());
                return obj;
            })(new this.$.$mol_view);
        }
        right_mousedown(event, force) {
            return (event !== void 0) ? event : null;
        }
        RightLeftResize() {
            return ((obj) => {
                obj.style = () => ({
                    "top": this.inner_resize_top(),
                    "height": this.resize_width(),
                    "width": this.resize_width(),
                    "left": this.right_left_resize_left(),
                });
                obj.view_box = () => "-50 0 100 100";
                obj.sub = () => [].concat(this.RightLeftResizeCircle());
                return obj;
            })(new this.$.$mol_svg_root);
        }
        right_left_resize_left() {
            return 0;
        }
        RightLeftResizeCircle() {
            return ((obj) => {
                obj.size = () => 100;
                obj.r = () => this.right_resize_radius();
                obj.fill_opacity = () => this.right_resize_opacity();
                return obj;
            })(new this.$.$tg_svg_circle);
        }
        RightSpace() {
            return ((obj) => {
                obj.width = () => this.right_width();
                return obj;
            })(new this.$.$tg_chart_selector_space);
        }
        right_width(val, force) {
            return (val !== void 0) ? val : null;
        }
        RightRightResize() {
            return ((obj) => {
                obj.style = () => ({
                    "top": this.outer_resize_top(),
                    "height": this.resize_width(),
                    "width": this.resize_width(),
                    "left": this.right_right_resize_left(),
                });
                obj.view_box = () => "50 0 100 100";
                obj.sub = () => [].concat(this.RightRightResizeCircle());
                return obj;
            })(new this.$.$mol_svg_root);
        }
        right_right_resize_left() {
            return 0;
        }
        RightRightResizeCircle() {
            return ((obj) => {
                obj.size = () => 100;
                obj.r = () => this.right_resize_radius();
                obj.fill_opacity = () => this.right_resize_opacity();
                return obj;
            })(new this.$.$tg_svg_circle);
        }
        tg_chart_selector_right_width(val, force) {
            return (val !== void 0) ? val : null;
        }
        selected_border_width(val, force) {
            return (val !== void 0) ? val : null;
        }
        left_resize_radius(val, force) {
            return (val !== void 0) ? val : 0;
        }
        right_resize_radius(val, force) {
            return (val !== void 0) ? val : 0;
        }
        left_resize_opacity(val, force) {
            return (val !== void 0) ? val : 0;
        }
        right_resize_opacity(val, force) {
            return (val !== void 0) ? val : 0;
        }
        is_left_resizing(val, force) {
            return (val !== void 0) ? val : false;
        }
        is_right_resizing(val, force) {
            return (val !== void 0) ? val : false;
        }
        is_grabbing(val, force) {
            return (val !== void 0) ? val : false;
        }
        grabbing_at(val, force) {
            return (val !== void 0) ? val : null;
        }
        size(val, force) {
            return (val !== void 0) ? val : null;
        }
        control_width(val, force) {
            return (val !== void 0) ? val : null;
        }
        height() {
            return null;
        }
        style() {
            return ({
                "cursor": this.cursor(),
            });
        }
        cursor(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "Graph", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "LeftSpace", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "left_width", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "LeftLeftResize", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "LeftLeftResizeCircle", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "Selected", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "selected_width", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "Left", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "cursor_non_mid", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "left_mousedown", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "LeftRightResize", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "LeftRightResizeCircle", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "Mid", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "mid_mousedown", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "cursor_mid", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "Grab", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "GrabCircle", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "grab_radius", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "grab_opacity", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "Right", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "right_mousedown", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "RightLeftResize", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "RightLeftResizeCircle", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "RightSpace", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "right_width", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "RightRightResize", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "RightRightResizeCircle", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "tg_chart_selector_right_width", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "selected_border_width", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "left_resize_radius", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "right_resize_radius", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "left_resize_opacity", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "right_resize_opacity", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "is_left_resizing", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "is_right_resizing", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "is_grabbing", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "grabbing_at", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "size", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "control_width", null);
    __decorate([
        $.$mol_mem
    ], $tg_chart_selector.prototype, "cursor", null);
    $.$tg_chart_selector = $tg_chart_selector;
})($ || ($ = {}));
(function ($) {
    class $tg_chart_selector_space extends $.$mol_view {
        width() {
            return 0;
        }
        style() {
            return ({
                "flex": this.flex(),
            });
        }
        flex() {
            return "";
        }
    }
    $.$tg_chart_selector_space = $tg_chart_selector_space;
})($ || ($ = {}));
//app.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $tg_app extends $.$tg_app {
            static instance() {
                return $tg_app.Root(0);
            }
            is_night_mode(val) {
                return super.is_night_mode(val);
            }
            switch_title() {
                const result = 'Switch to ' + (this.is_night_mode() ? 'Day' : 'Night') + ' Mode';
                return result;
            }
            charts() {
                const result = this.chart_data().map((data, idx) => this.ChartContainer(idx));
                return result;
            }
            mol_theme() {
                return '$mol_theme_' + (this.is_night_mode() ? 'dark' : 'light');
            }
            chart_data() {
                const data = this.$.$mol_http.resource('chart-data.json').json();
                const result = data;
                return result;
            }
            columns(idx) {
                const chart_data = this.chart_data()[idx];
                const result = {};
                const colCount = chart_data.columns.length;
                let xCount;
                for (let i = 0; i < colCount; i++) {
                    const column = chart_data.columns[i];
                    if (column[0] != 'x')
                        continue;
                    const start = new $.$mol_time_moment(column[1]);
                    const values = column.slice(1).map(value => new $.$mol_time_interval({ start, end: new $.$mol_time_moment(value) }).duration.count('P1D'));
                    result.x = { values, start };
                    xCount = values.length;
                    break;
                }
                chart_data.columns.forEach(column => {
                    const name = column[0];
                    if (name != 'x') {
                        const values = column.slice(1, xCount + 1);
                        const max = Math.max(...values);
                        const color = chart_data.colors[name];
                        const title = chart_data.names[name];
                        result[name] = { values, max, color, title };
                    }
                });
                return result;
            }
            header(idx) {
                return `Chart #${idx}`;
            }
            k() {
                return 480 / 1080;
            }
            formatInt(n) {
                let result = n.toString();
                result = result.replace(/000000000$/, 'T');
                result = result.replace(/(\d)(\d)00000000$/, '$' + '1.$' + '2T');
                result = result.replace(/000000$/, 'M');
                result = result.replace(/(\d)(\d)00000$/, '$' + '1.$' + '2M');
                result = result.replace(/000$/, 'K');
                result = result.replace(/(\d)(\d)00$/, '$' + '1.$' + '2K');
                result = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return result;
            }
        }
        __decorate([
            $$.$bw_session
        ], $tg_app.prototype, "is_night_mode", null);
        __decorate([
            $.$mol_mem
        ], $tg_app.prototype, "chart_data", null);
        __decorate([
            $.$mol_mem_key
        ], $tg_app.prototype, "columns", null);
        $$.$tg_app = $tg_app;
        class $tg_chart extends $.$tg_chart {
            polyline_names() {
                const columns = this.columns();
                const exclude_names = this.exclude_names();
                const result = Object.keys(columns).filter(name => name != 'x');
                return result;
            }
            polyline_names_filtered() {
                const exclude_names = this.exclude_names();
                let result = this.polyline_names();
                result = result.filter(name => !(exclude_names && exclude_names.has(name)));
                return result;
            }
            line_title(name) {
                const columns = this.columns();
                const result = columns[name].title;
                return result;
            }
            line_color(name) {
                const columns = this.columns();
                const result = columns[name].color;
                return result;
            }
            xMax() {
                const columns = this.columns();
                const result = !columns.x.values.length ? null : columns.x.values[columns.x.values.length - 1];
                return result;
            }
        }
        __decorate([
            $.$mol_mem
        ], $tg_chart.prototype, "polyline_names", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart.prototype, "polyline_names_filtered", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart.prototype, "xMax", null);
        $$.$tg_chart = $tg_chart;
        class $tg_chart_selected_area extends $.$tg_chart_selected_area {
            chart() {
                const result = this['object_host()'];
                return result;
            }
            size(val) {
                return meter({
                    _super: (val) => super.size(val),
                    _value: () => {
                        const dom_node = this.dom_node();
                        const result = { width: dom_node.offsetWidth, height: dom_node.offsetHeight };
                        return result;
                    }
                });
            }
            width() {
                const size = this.size();
                const result = size === null ? null : size.width;
                return result;
            }
            height() {
                const size = this.size();
                const result = size === null ? null : size.height;
                return result;
            }
            info_pos() {
                const left = this.left();
                const right = this.right();
                const _width = this.width();
                const _height = this.height();
                if (_width === null || _height === null)
                    return null;
                const width = _width;
                const height = _height;
                const day = this.day_inspect();
                const info_width = this.info_width();
                const info_height = this.info_height();
                const columns = this.chart().columns();
                const max_y = Math.max(...this.chart().polyline_names_filtered().map((name) => columns[name].values[day]));
                const view_box_height = this.Graph().view_box_height();
                const upper_space = (view_box_height - max_y) / view_box_height * height;
                let info_top = this.info_top_min();
                let info_left = null;
                const info_margin = this.info_margin();
                const day_x = (day - left) * width / (right - left);
                if (info_top + info_height < upper_space - info_margin) {
                    info_left = day_x - info_width / 2;
                    if (width - info_left < info_width)
                        info_left = width - info_width;
                    if (info_left < 0)
                        info_left = 0;
                }
                else if (day - left < right - day) {
                    info_left = day_x + info_margin;
                }
                else {
                    info_left = day_x - info_width - info_margin;
                }
                const result = { info_left, info_top };
                return result;
            }
            info_margin() {
                return Math.ceil(this.Graph().inspect_circle_size() / 2) + 1;
            }
            info_top_min() {
                const result = -56 * $tg_app.instance().k();
                return result;
            }
            info_left() {
                return this.info_pos().info_left;
            }
            info_top() {
                return this.info_pos().info_top;
            }
            InspectInfo() {
                const result = this.day_inspect() === null ? null : super.InspectInfo();
                return result;
            }
            dates() {
                const day_width = this.day_width();
                const date_label_step = Math.ceil((this.date_label_width_min() + this.date_label_space_min()) / day_width);
                const date_label_width = date_label_step * day_width;
                const result = [];
                for (let day = this.xMax(); day >= 0; day -= date_label_step) {
                    result.unshift(this.DateLabel({ day, date_label_step }));
                }
                return result;
            }
            levels() {
                const view_box_height = this.Graph().view_box_height();
                const height = this.height();
                const configs = [];
                if (view_box_height !== null && height !== null) {
                    const count_max = 6;
                    let level_value = view_box_height / count_max;
                    let pow = Math.pow(10, Math.floor(Math.log10(level_value)));
                    level_value = Math.round(level_value / pow) * pow;
                    let level_height = Math.round(level_value / view_box_height * height);
                    let count = Math.ceil(height / level_height);
                    if (height - (count - 1) * level_height < this.level_height_min())
                        count--;
                    if (count > count_max + 1) {
                        pow = pow / 10;
                        level_value = Math.round(view_box_height / count_max / pow) * pow;
                        level_height = Math.round(level_value / view_box_height * height);
                        count = Math.ceil(height / level_height);
                    }
                    const formatInt = $tg_app.instance().formatInt;
                    for (let i = 0; i < count; i++) {
                        configs.unshift({
                            top: i < count - 1 ? height - level_height * (i + 1) : 0,
                            height: i < count - 1 ? level_height : height - i * level_height,
                            text: formatInt(level_value * i),
                        });
                    }
                }
                const result = configs.map(config => this.Level(config));
                return result;
            }
            level_height_min() {
                const result = $tg_app.instance().k() * 25;
                return result;
            }
            level_text(config) {
                return config.text;
            }
            level_top(config) {
                return config.top;
            }
            level_height(config) {
                return config.height;
            }
            day_width() {
                const left = this.left();
                const right = this.right();
                const width = this.width();
                const delta = right - left;
                const result = width / delta;
                return result;
            }
            date_label_width_min() {
                return 40;
            }
            date_label_space_min() {
                return this.date_label_width_min() / 2;
            }
            date_label_width(config) {
                const result = config.date_label_step * this.day_width();
                return result;
            }
            date_label_left(config) {
                const result = this.dates_width() - (1 + (this.xMax() - config.day) / config.date_label_step) * this.date_label_width(config);
                return result;
            }
            date_label_text(config) {
                const columns = this.columns();
                const start = columns.x.start;
                const moment = start.shift({ day: config.day });
                const result = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][moment.month] + ' ' + (moment.day + 1);
                return result;
            }
            dates_width() {
                const left = this.left();
                const right = this.right();
                const width = this.width();
                const xMax = this.xMax();
                const result = xMax / (right - left) * width;
                return result;
            }
            xMax() {
                const columns = this.columns();
                const result = !columns.x.values.length ? null : columns.x.values[columns.x.values.length - 1];
                return result;
            }
            scroll_left() {
                const left = this.left();
                const xMax = this.xMax();
                const dates_width = this.dates_width();
                const result = Math.ceil(left / xMax * dates_width);
                return result;
            }
        }
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "size", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "info_pos", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "info_left", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "info_top", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "dates", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "levels", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selected_area.prototype, "xMax", null);
        $$.$tg_chart_selected_area = $tg_chart_selected_area;
        class $tg_chart_graph extends $.$tg_chart_graph {
            chart() {
                const result = this['object_host()'].chart();
                return result;
            }
            graph_width() {
                const result = this['object_host()'].width();
                return result;
            }
            graph_height() {
                const result = this['object_host()'].height();
                return result;
            }
            size(val) {
                return meter({
                    _super: (val) => super.size(val),
                    _value: () => {
                        const dom_node = this.dom_node();
                        const result = { width: dom_node.offsetWidth, height: dom_node.offsetHeight };
                        return result;
                    }
                });
            }
            width() {
                const size = this.size();
                const result = !size ? null : this.size().width;
                return result;
            }
            height() {
                const size = this.size();
                const result = !size ? null : this.size().height;
                return result;
            }
            event_mousedown(event, force) {
                if (!event || !this.need_inspect_day())
                    return;
                this.is_fixed_inspect(!this.is_fixed_inspect());
                this.inspect_x(event.offsetX);
            }
            event_mousemove(event, force) {
                if (!event || !this.need_inspect_day() || this.is_fixed_inspect())
                    return;
                this.inspect_x(event.offsetX);
            }
            event_mouseleave(event, force) {
                if (!event || this.is_fixed_inspect())
                    return;
                this.inspect_x(null);
            }
            day_inspect() {
                const left = this.left();
                const right = this.right();
                const inspect_x = this.inspect_x();
                const width = this.width();
                const result = !width || inspect_x === null ? null : Math.round((right - left) * inspect_x / width + left);
                return result;
            }
            InspectLine() {
                const result = this.day_inspect() === null ? null : super.InspectLine();
                return result;
            }
            inspect_stroke_width() {
                const result = this.px_to_wu(2);
                return result;
            }
            px_to_wu(px) {
                const left = this.left();
                const right = this.right();
                const width = this.width();
                const result = px * (right - left) / width;
                return result;
            }
            px_to_hu(px) {
                const view_box_height = this.view_box_height();
                const height = this.height();
                const result = px * view_box_height / height;
                return result;
            }
            inspect_circles() {
                const day_inspect = this.day_inspect();
                const result = day_inspect === null ? null : this.chart().polyline_names_filtered().map((name) => this.InspectCircle(name));
                return result;
            }
            inspect_circle_x() {
                const day_inspect = this.day_inspect();
                const result = day_inspect - this.inspect_circle_width() / 2;
                return result;
            }
            inspect_circle_y(name) {
                const columns = this.chart().columns();
                const day_inspect = this.day_inspect();
                const view_box_height = this.view_box_height();
                const inspect_circle_height = this.inspect_circle_height();
                const result = view_box_height - columns[name].values[day_inspect] - inspect_circle_height / 2;
                return result;
            }
            inspect_circle_size() {
                const result = super.inspect_circle_size() * $tg_app.instance().k();
                return result;
            }
            inspect_circle_width() {
                const result = this.px_to_wu(this.inspect_circle_size());
                return result;
            }
            inspect_circle_height() {
                const result = this.px_to_hu(this.inspect_circle_size());
                return result;
            }
            columns_max() {
                const left = this.left();
                const right = this.right();
                if (this.need_inspect_day() && (left === null || right === null))
                    return null;
                const columns = this.chart().columns();
                const values = columns.x.values;
                const count = values.length;
                let iMin;
                let iMax;
                let iMinCorrection = 0;
                let iMaxCorrection = 0;
                if (left === null) {
                    iMin = 0;
                }
                for (let i = 0; i < count; i++) {
                    if (iMin === void 0) {
                        const value = values[i];
                        if (value >= left) {
                            iMinCorrection = value == left || i == 0 ? 0 : 1;
                            iMin = i - iMinCorrection;
                        }
                    }
                    else {
                        if (right === null)
                            break;
                        const value = values[i];
                        if (value >= right) {
                            iMax = i;
                            iMaxCorrection = value == right || i == 0 ? 0 : 1;
                            break;
                        }
                    }
                }
                if (iMax === void 0) {
                    iMax = count - 1;
                }
                let result;
                result = {};
                this.chart().polyline_names().forEach((name) => {
                    const values = columns[name].values.slice(iMin, iMax + 1);
                    const max = Math.max(...values.slice(iMinCorrection, values.length - iMaxCorrection));
                    result[name] = max;
                });
                return result;
            }
            view_box_height(val, force) {
                const result = animate({
                    _super: (val, force) => super.view_box_height(val, force),
                    _master: () => this.columns_max(),
                    _value: (master) => master === null ?
                        null :
                        Math.max(...this.chart().polyline_names_filtered().map((name) => master[name])),
                    _data: (val) => {
                        const key = '_' + 'view_box_height' + '_anim_data';
                        if (val === void 0) {
                            return this[key];
                        }
                        else if (val === null) {
                            this[key] = null;
                        }
                        else {
                            this[key] = val;
                        }
                    },
                }, val, force);
                return result;
            }
            points(name) {
                const columns = this.chart().columns();
                const items = [];
                const count = columns.x.values.length;
                for (let i = 0; i < count; i++) {
                    items.push(`${columns.x.values[i]},${columns[name].values[i]}`);
                }
                const result = items.join(' ');
                return result;
            }
            d(name) {
                const columns = this.chart().columns();
                const items = [];
                const count = columns.x.values.length;
                for (let i = 0; i < count; i++) {
                    if (!i) {
                        items.push(`M${columns.x.values[i]},${columns[name].values[i]}`);
                    }
                    else {
                        items.push(`l${columns.x.values[i] - columns.x.values[i - 1]},${columns[name].values[i] - columns[name].values[i - 1]}`);
                    }
                }
                const result = items.join('');
                return result;
            }
            line_color(name) {
                const result = this.chart().line_color(name);
                return result;
            }
            polyline_opacity(name, val, force) {
                const result = animate({
                    stepMin: 1 / 16,
                    _super: (val, force) => super.polyline_opacity(name, val, force),
                    _master: () => this.chart().exclude_names(),
                    _value: (master) => master && master.has(name) ? 0 : 1,
                    _data: (val) => {
                        const key = '_' + 'polyline_opacity' + '_anim_data' + '_' + name;
                        if (val === void 0) {
                            return this[key];
                        }
                        else if (val === null) {
                            this[key] = null;
                        }
                        else {
                            this[key] = val;
                        }
                    },
                }, val, force);
                return result;
            }
            transform() {
                const height = this.view_box_height();
                const result = height === null ? null : `translate(0,${height}) scale(1,-1)`;
                return result;
            }
            view_box() {
                const left = this.left();
                const right = this.right();
                const minX = left !== null ? left : 0;
                const width = right !== null ? right - minX : this.chart().xMax();
                const height = this.view_box_height();
                const result = minX === null || width === null || height === null ? null : `${minX} 0 ${width} ${height}`;
                return result;
            }
            polylines() {
                const result = this.chart().polyline_names().map((name) => this.Polyline(name));
                return result;
            }
        }
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "size", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "day_inspect", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "InspectLine", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "inspect_stroke_width", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "inspect_circle_size", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "inspect_circle_width", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "inspect_circle_height", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "columns_max", null);
        __decorate([
            $.$mol_mem_key
        ], $tg_chart_graph.prototype, "polyline_opacity", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "transform", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "view_box", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_graph.prototype, "polylines", null);
        $$.$tg_chart_graph = $tg_chart_graph;
        function meter(config) {
            let result = config._super();
            if (result === null) {
                const adjust_value = () => {
                    new $.$mol_defer(() => {
                        const value = config._value();
                        config._super(value);
                    });
                };
                window.addEventListener('resize', (event) => {
                    adjust_value();
                });
                adjust_value();
            }
            return result;
        }
        function actualOffsetLeft(fromEl, toEl, silent = false) {
            if (fromEl instanceof $.$mol_view)
                fromEl = fromEl.dom_node();
            if (toEl instanceof $.$mol_view)
                toEl = toEl.dom_node();
            let result = 0;
            while (true) {
                result += fromEl.offsetLeft;
                const offsetParent = fromEl.offsetParent;
                if (!offsetParent) {
                    if (!silent) {
                        console.error({ msg: 'fromEl is not descendant of toEl', fromEl, toEl });
                        console.trace();
                    }
                    return null;
                }
                else if (offsetParent === toEl) {
                    return result;
                }
                else {
                    fromEl = offsetParent;
                    const delta = fromEl.offsetWidth - fromEl.clientWidth;
                    result += delta;
                }
            }
        }
        function animate(config, val, force) {
            let result = config._super(val, force);
            const master = config._master();
            if (val === void 0) {
                const value = config._value(master);
                if (result === null) {
                    result = value;
                    config._super(result);
                }
                else if (result != value) {
                    let data = config._data();
                    if (data && data.value != value) {
                        clearInterval(data.id);
                        config._data(null);
                    }
                    data = config._data();
                    if (!data) {
                        const delta = value - result;
                        const stepsMax = !config.stepsMax ? 16 : Math.ceil(Math.abs(config.stepsMax));
                        const timeInterval = !config.timeInterval ? 16 : Math.ceil(Math.abs(config.timeInterval));
                        let step = Math.abs(delta) / stepsMax;
                        if (config.stepMin) {
                            step = Math.max(Math.abs(config.stepMin), Math.abs(delta) / stepsMax);
                        }
                        const steps = Math.ceil(Math.abs(delta) / step);
                        step = delta / steps;
                        let i = 0;
                        const id = setInterval(() => {
                            const value_new = result + step * ++i;
                            config._super(value_new);
                            if (i >= steps)
                                clearInterval(id);
                        }, timeInterval);
                        config._data({ value, id });
                    }
                }
            }
            return result;
        }
        class $tg_chart_selector extends $.$tg_chart_selector {
            chart() {
                const result = this['object_host()'];
                return result;
            }
            resize_k() {
                return 1.33;
            }
            resize_width() {
                return this.resize_height();
            }
            resize_height() {
                const height = this.height();
                const result = height === null ? null : height * this.resize_k();
                return result;
            }
            inner_resize_top() {
                const height = this.height();
                const selected_border_width = this.selected_border_width();
                const result = height === null || selected_border_width == null ? null : height * (1 - this.resize_k()) / 2 - selected_border_width;
                return result;
            }
            left_left_resize_left() {
                const resize_width = this.resize_width();
                const result = resize_width === null ? null : Math.ceil(-resize_width + this.left_width());
                return result;
            }
            right_left_resize_left() {
                return -this.resize_width() + this.right_resize_width();
            }
            right_right_resize_left() {
                const result = !this.is_right_resizing() ? 0 : this.width() - this.right_width() - 1;
                return result;
            }
            outer_resize_top() {
                const height = this.height();
                const selected_border_width = this.selected_border_width();
                const result = height === null || selected_border_width == null ? null : height * (1 - this.resize_k()) / 2;
                return result;
            }
            size(val) {
                return meter({
                    _super: (val) => super.size(val),
                    _value: () => {
                        const dom_node = this.dom_node();
                        const result = { width: dom_node.offsetWidth, height: dom_node.offsetHeight };
                        return result;
                    }
                });
            }
            left_resize_opacity(val, force) {
                const result = animate({
                    _super: (val, force) => super.left_resize_opacity(val, force),
                    _master: () => this.is_left_resizing(),
                    _value: (master) => master ? 1 : 0,
                    _data: (val) => {
                        const key = '_' + 'left_resize_opacity' + '_anim_data';
                        if (val === void 0) {
                            return this[key];
                        }
                        else if (val === null) {
                            this[key] = null;
                        }
                        else {
                            this[key] = val;
                        }
                    },
                }, val, force);
                return result;
            }
            right_resize_opacity(val, force) {
                const result = animate({
                    _super: (val, force) => super.right_resize_opacity(val, force),
                    _master: () => this.is_right_resizing(),
                    _value: (master) => master ? 1 : 0,
                    _data: (val) => {
                        const key = '_' + 'right_resize_opacity' + '_anim_data';
                        if (val === void 0) {
                            return this[key];
                        }
                        else if (val === null) {
                            this[key] = null;
                        }
                        else {
                            this[key] = val;
                        }
                    },
                }, val, force);
                return result;
            }
            left_resize_radius(val, force) {
                const result = animate({
                    _super: (val, force) => super.left_resize_radius(val, force),
                    _master: () => this.is_left_resizing(),
                    _value: (master) => master ? 50 : 0,
                    _data: (val) => {
                        const key = '_' + 'left_resize_radius' + '_anim_data';
                        if (val === void 0) {
                            return this[key];
                        }
                        else if (val === null) {
                            this[key] = null;
                        }
                        else {
                            this[key] = val;
                        }
                    },
                }, val, force);
                return result;
            }
            right_resize_radius(val, force) {
                const result = animate({
                    _super: (val, force) => super.right_resize_radius(val, force),
                    _master: () => this.is_right_resizing(),
                    _value: (master) => master ? 50 : 0,
                    _data: (val) => {
                        const key = '_' + 'right_resize_radius' + '_anim_data';
                        if (val === void 0) {
                            return this[key];
                        }
                        else if (val === null) {
                            this[key] = null;
                        }
                        else {
                            this[key] = val;
                        }
                    },
                }, val, force);
                return result;
            }
            grab_radius(val, force) {
                const result = animate({
                    _super: (val, force) => super.grab_radius(val, force),
                    _master: () => this.is_grabbing(),
                    _value: (master) => master ? 50 : 0,
                    _data: (val) => {
                        const key = '_' + 'grab_radius' + '_anim_data';
                        if (val === void 0) {
                            return this[key];
                        }
                        else if (val === null) {
                            this[key] = null;
                        }
                        else {
                            this[key] = val;
                        }
                    },
                }, val, force);
                return result;
            }
            grab_opacity(val, force) {
                const result = animate({
                    _super: (val, force) => super.grab_opacity(val, force),
                    _master: () => this.is_grabbing(),
                    _value: (master) => master ? 1 : 0,
                    _data: (val) => {
                        const key = '_' + 'grab_opacity' + '_anim_data';
                        if (val === void 0) {
                            return this[key];
                        }
                        else if (val === null) {
                            this[key] = null;
                        }
                        else {
                            this[key] = val;
                        }
                    },
                }, val, force);
                return result;
            }
            grab_left() {
                const grabbing = this.grabbing_at();
                if (!grabbing)
                    return null;
                const selected_width = this.selected_width();
                const right_resize_width = this.right_resize_width();
                const mid_width = (selected_width - 2 * right_resize_width);
                const ofs = actualOffsetLeft(this.Mid(), document.body);
                const resize_width = this.resize_width();
                let result = grabbing.x - ofs - resize_width / 2;
                if (result < 0) {
                    result = 0;
                }
                else if (result + resize_width > mid_width) {
                    result = mid_width - resize_width;
                }
                return result;
            }
            right_resize_width(val) {
                return meter({
                    _super: (val) => super.tg_chart_selector_right_width(val),
                    _value: () => {
                        const dom_node = this.Right().dom_node();
                        const result = dom_node.offsetWidth;
                        return result;
                    }
                });
            }
            selected_border_width(val) {
                return meter({
                    _super: (val) => super.selected_border_width(val),
                    _value: () => {
                        const dom_node = this.Selected().dom_node();
                        const style = window.getComputedStyle(dom_node);
                        const result = Number.parseFloat(style.borderTopWidth);
                        return result;
                    }
                });
            }
            width() {
                const size = this.size();
                const result = size === null ? null : size.width;
                return result;
            }
            height() {
                const size = this.size();
                const result = size === null ? null : size.height;
                return result;
            }
            left() {
                const xMax = this.chart().xMax();
                const width = this.width();
                const result = xMax === null || !width ? null : xMax * this.left_width() / width;
                return result;
            }
            right() {
                const xMax = this.chart().xMax();
                const width = this.width();
                const result = xMax === null || !width ? null : xMax * (width - this.right_width()) / width;
                return result;
            }
            day_width() {
                const xMax = this.chart().xMax();
                const result = xMax ? this.width() / xMax : null;
                return result;
            }
            left_width(val, force) {
                let result = super.left_width(val, force);
                if (result === null) {
                    result = this.width() - this.selected_width() - this.right_width();
                }
                return result;
            }
            right_width(val, force) {
                const result = super.right_width(val, force) || 0;
                return result;
            }
            selected_width(val, force) {
                const result = super.selected_width(val, force) || 2 * this.min_selected_width();
                return result;
            }
            min_selected_width() {
                const min = 44;
                const day_width = this.day_width();
                let result = day_width > 0 ? Math.max(min, day_width * 10) : min;
                result = Math.max(result, this.resize_width() + 2 * this.right_resize_width());
                return result;
            }
            mousedown_helper(cursor, onMouseMove, onMouseUp) {
                this._is_in_mousedown = true;
                this.cursor_mid(null);
                this.cursor_non_mid(null);
                this.cursor(cursor);
                const tg_app_node = $tg_app.instance().dom_node();
                const mousemoveListener = (e) => {
                    if (e.buttons == 0) {
                        mouseupListener();
                        return;
                    }
                    onMouseMove(e);
                };
                const mouseupListener = () => {
                    this._is_in_mousedown = false;
                    this.cursor(null);
                    this.cursor_mid('grab');
                    this.cursor_non_mid('col-resize');
                    tg_app_node.removeEventListener('mousemove', mousemoveListener);
                    tg_app_node.removeEventListener('mouseup', mouseupListener);
                    if (onMouseUp !== void 0) {
                        onMouseUp();
                    }
                };
                tg_app_node.addEventListener('mousemove', mousemoveListener);
                tg_app_node.addEventListener('mouseup', mouseupListener);
            }
            mid_mousedown(event) {
                if (!event || this._is_in_mousedown)
                    return;
                const left_width = this.left_width();
                const right_width = this.right_width();
                const selected_width = this.selected_width();
                const width = this.width();
                this.is_grabbing(true);
                this.grabbing_at({ x: event.clientX, y: event.clientY });
                this.mousedown_helper('grab', (e) => {
                    const delta = e.screenX - event.screenX;
                    let left_width_new = left_width + delta;
                    let right_width_new = right_width - delta;
                    if (left_width_new < 0) {
                        left_width_new = 0;
                        right_width_new = width - selected_width;
                    }
                    else if (right_width_new < 0) {
                        right_width_new = 0;
                        left_width_new = width - selected_width;
                    }
                    this.left_width(left_width_new);
                    this.right_width(right_width_new);
                }, () => this.is_grabbing(false));
            }
            left_mousedown(event) {
                if (!event || this._is_in_mousedown)
                    return;
                const left_width = this.left_width();
                const right_width = this.right_width();
                const selected_width = this.selected_width();
                const width = this.width();
                const min_selected_width = this.min_selected_width();
                this.is_left_resizing(true);
                this.mousedown_helper('col-resize', (e) => {
                    const delta = e.screenX - event.screenX;
                    let left_width_new = left_width + delta;
                    let selected_width_new = selected_width - delta;
                    if (left_width_new < 0) {
                        left_width_new = 0;
                        selected_width_new = width - right_width;
                    }
                    else if (selected_width_new < min_selected_width) {
                        selected_width_new = min_selected_width;
                        left_width_new = width - min_selected_width - right_width;
                    }
                    this.left_width(left_width_new);
                    this.selected_width(selected_width_new);
                }, () => this.is_left_resizing(false));
            }
            right_mousedown(event) {
                if (!event || this._is_in_mousedown)
                    return;
                const tg_app_node = $tg_app.instance().dom_node();
                const left_width = this.left_width();
                const right_width = this.right_width();
                const selected_width = this.selected_width();
                const width = this.width();
                const min_selected_width = this.min_selected_width();
                this.is_right_resizing(true);
                this.mousedown_helper('col-resize', (e) => {
                    const delta = e.screenX - event.screenX;
                    let right_width_new = right_width - delta;
                    let selected_width_new = selected_width + delta;
                    if (right_width_new < 0) {
                        right_width_new = 0;
                        selected_width_new = width - left_width;
                    }
                    else if (selected_width_new < min_selected_width) {
                        selected_width_new = min_selected_width;
                        right_width_new = width - min_selected_width - left_width;
                    }
                    this.right_width(right_width_new);
                    this.selected_width(selected_width_new);
                }, () => this.is_right_resizing(false));
            }
        }
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "resize_height", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "inner_resize_top", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "size", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "left", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "right", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "day_width", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "left_width", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "right_width", null);
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector.prototype, "selected_width", null);
        $$.$tg_chart_selector = $tg_chart_selector;
        class $tg_chart_selector_space extends $.$tg_chart_selector_space {
            flex() {
                const width = this.width();
                const result = `0 0 ${width}px`;
                return result;
            }
        }
        __decorate([
            $.$mol_mem
        ], $tg_chart_selector_space.prototype, "flex", null);
        $$.$tg_chart_selector_space = $tg_chart_selector_space;
        class $tg_chart_check_bar extends $.$tg_chart_check_bar {
            chart() {
                return this['object_host()'];
            }
            checkboxes() {
                const result = this.chart().polyline_names().map((name) => this.Checkbox(name));
                return result;
            }
            checkbox_title(name) {
                const columns = this.columns();
                const result = columns[name].title;
                return result;
            }
            color(name) {
                const columns = this.columns();
                const result = columns[name].color;
                return result;
            }
            checked(name, val, force) {
                if (val !== void 0) {
                    const exclude_names = new Set(this.exclude_names());
                    if (val) {
                        exclude_names.delete(name);
                    }
                    else {
                        exclude_names.add(name);
                        const polyline_names = this.chart().polyline_names();
                        const len = polyline_names.length;
                        if (exclude_names.size >= len) {
                            exclude_names.delete(polyline_names[(polyline_names.findIndex((n) => n == name) + 1) % len]);
                        }
                    }
                    this.exclude_names(exclude_names);
                }
                const exclude_names = this.exclude_names();
                const result = !(exclude_names && this.exclude_names().has(name));
                return result;
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $tg_chart_check_bar.prototype, "checkbox_title", null);
        __decorate([
            $.$mol_mem_key
        ], $tg_chart_check_bar.prototype, "checked", null);
        $$.$tg_chart_check_bar = $tg_chart_check_bar;
        class $tg_chart_check_box extends $.$tg_chart_check_box {
            Icon() {
                const result = this.checked() ? super.IconChecked() : this.IconNonChecked();
                return result;
            }
        }
        __decorate([
            $.$mol_mem
        ], $tg_chart_check_box.prototype, "Icon", null);
        $$.$tg_chart_check_box = $tg_chart_check_box;
        class $tg_svg_circle extends $.$tg_svg_circle {
            cx() {
                return this.size() / 2;
            }
            cy() {
                return this.size() / 2;
            }
            r() {
                return (this.size() - this.stroke_width()) / 2;
            }
        }
        $$.$tg_svg_circle = $tg_svg_circle;
        class $tg_chart_inspect_info extends $.$tg_chart_inspect_info {
            day_inspect_as_date() {
                const columns = this.chart().columns();
                const start = columns.x.start;
                const day = this.day_inspect();
                const moment = start.shift({ day });
                const result = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][moment.weekday] + ', ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][moment.month] + ' ' + (moment.day + 1);
                new $.$mol_defer(() => {
                    const dom_node = this.dom_node();
                    this.width(dom_node.offsetWidth);
                    this.height(dom_node.offsetHeight);
                });
                return result;
            }
            values() {
                return this.chart().polyline_names_filtered().map((name) => this.Value(name));
            }
            count(name) {
                const columns = this.chart().columns();
                const result = $tg_app.instance().formatInt(columns[name].values[this.day_inspect()]);
                return result;
            }
            line_title(name) {
                return this.chart().line_title(name);
            }
            color(name) {
                return this.chart().line_color(name);
            }
            chart() {
                return this['object_host()'].chart();
            }
        }
        __decorate([
            $.$mol_mem
        ], $tg_chart_inspect_info.prototype, "day_inspect_as_date", null);
        $$.$tg_chart_inspect_info = $tg_chart_inspect_info;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//app.view.js.map
//# sourceMappingURL=web.js.map