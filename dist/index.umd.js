(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.boilerplate = {}));
})(this, (function (exports) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    exports.InstanceScope = void 0;
    (function (InstanceScope) {
        InstanceScope["SINGLETON"] = "ioc-resolution:container-singleton";
        InstanceScope["TRANSIENT"] = "ioc-resolution:transient";
        InstanceScope["GLOBAL_SHARED_SINGLETON"] = "ioc-resolution:global-shared-singleton";
    })(exports.InstanceScope || (exports.InstanceScope = {}));

    function createDefaultValueMap(factory) {
        var map = new Map();
        var originGet = map.get.bind(map);
        map.get = function (key) {
            if (map.has(key)) {
                return originGet(key);
            }
            else {
                var defaultValue = factory(key);
                map.set(key, defaultValue);
                return map.get(key);
            }
        };
        return map;
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    /*! *****************************************************************************
    Copyright (C) Microsoft. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var Reflect$1;
    (function (Reflect) {
        // Metadata Proposal
        // https://rbuckton.github.io/reflect-metadata/
        (function (factory) {
            var root = typeof commonjsGlobal === "object" ? commonjsGlobal :
                typeof self === "object" ? self :
                    typeof this === "object" ? this :
                        Function("return this;")();
            var exporter = makeExporter(Reflect);
            if (typeof root.Reflect === "undefined") {
                root.Reflect = Reflect;
            }
            else {
                exporter = makeExporter(root.Reflect, exporter);
            }
            factory(exporter);
            function makeExporter(target, previous) {
                return function (key, value) {
                    if (typeof target[key] !== "function") {
                        Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                    }
                    if (previous)
                        previous(key, value);
                };
            }
        })(function (exporter) {
            var hasOwn = Object.prototype.hasOwnProperty;
            // feature test for Symbol support
            var supportsSymbol = typeof Symbol === "function";
            var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
            var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
            var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
            var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
            var downLevel = !supportsCreate && !supportsProto;
            var HashMap = {
                // create an object in dictionary mode (a.k.a. "slow" mode in v8)
                create: supportsCreate
                    ? function () { return MakeDictionary(Object.create(null)); }
                    : supportsProto
                        ? function () { return MakeDictionary({ __proto__: null }); }
                        : function () { return MakeDictionary({}); },
                has: downLevel
                    ? function (map, key) { return hasOwn.call(map, key); }
                    : function (map, key) { return key in map; },
                get: downLevel
                    ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                    : function (map, key) { return map[key]; },
            };
            // Load global or shim versions of Map, Set, and WeakMap
            var functionPrototype = Object.getPrototypeOf(Function);
            var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
            var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
            var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
            var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
            // [[Metadata]] internal slot
            // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
            var Metadata = new _WeakMap();
            /**
             * Applies a set of decorators to a property of a target object.
             * @param decorators An array of decorators.
             * @param target The target object.
             * @param propertyKey (Optional) The property key to decorate.
             * @param attributes (Optional) The property descriptor for the target key.
             * @remarks Decorators are applied in reverse order.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     Example = Reflect.decorate(decoratorsArray, Example);
             *
             *     // property (on constructor)
             *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
             *
             *     // property (on prototype)
             *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
             *
             *     // method (on constructor)
             *     Object.defineProperty(Example, "staticMethod",
             *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
             *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
             *
             *     // method (on prototype)
             *     Object.defineProperty(Example.prototype, "method",
             *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
             *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
             *
             */
            function decorate(decorators, target, propertyKey, attributes) {
                if (!IsUndefined(propertyKey)) {
                    if (!IsArray(decorators))
                        throw new TypeError();
                    if (!IsObject(target))
                        throw new TypeError();
                    if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                        throw new TypeError();
                    if (IsNull(attributes))
                        attributes = undefined;
                    propertyKey = ToPropertyKey(propertyKey);
                    return DecorateProperty(decorators, target, propertyKey, attributes);
                }
                else {
                    if (!IsArray(decorators))
                        throw new TypeError();
                    if (!IsConstructor(target))
                        throw new TypeError();
                    return DecorateConstructor(decorators, target);
                }
            }
            exporter("decorate", decorate);
            // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
            // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
            /**
             * A default metadata decorator factory that can be used on a class, class member, or parameter.
             * @param metadataKey The key for the metadata entry.
             * @param metadataValue The value for the metadata entry.
             * @returns A decorator function.
             * @remarks
             * If `metadataKey` is already defined for the target and target key, the
             * metadataValue for that key will be overwritten.
             * @example
             *
             *     // constructor
             *     @Reflect.metadata(key, value)
             *     class Example {
             *     }
             *
             *     // property (on constructor, TypeScript only)
             *     class Example {
             *         @Reflect.metadata(key, value)
             *         static staticProperty;
             *     }
             *
             *     // property (on prototype, TypeScript only)
             *     class Example {
             *         @Reflect.metadata(key, value)
             *         property;
             *     }
             *
             *     // method (on constructor)
             *     class Example {
             *         @Reflect.metadata(key, value)
             *         static staticMethod() { }
             *     }
             *
             *     // method (on prototype)
             *     class Example {
             *         @Reflect.metadata(key, value)
             *         method() { }
             *     }
             *
             */
            function metadata(metadataKey, metadataValue) {
                function decorator(target, propertyKey) {
                    if (!IsObject(target))
                        throw new TypeError();
                    if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                        throw new TypeError();
                    OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                }
                return decorator;
            }
            exporter("metadata", metadata);
            /**
             * Define a unique metadata entry on the target.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param metadataValue A value that contains attached metadata.
             * @param target The target object on which to define metadata.
             * @param propertyKey (Optional) The property key for the target.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     Reflect.defineMetadata("custom:annotation", options, Example);
             *
             *     // property (on constructor)
             *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
             *
             *     // property (on prototype)
             *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
             *
             *     // method (on constructor)
             *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
             *
             *     // method (on prototype)
             *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
             *
             *     // decorator factory as metadata-producing annotation.
             *     function MyAnnotation(options): Decorator {
             *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
             *     }
             *
             */
            function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            exporter("defineMetadata", defineMetadata);
            /**
             * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.hasMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function hasMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasMetadata(metadataKey, target, propertyKey);
            }
            exporter("hasMetadata", hasMetadata);
            /**
             * Gets a value indicating whether the target object has the provided metadata key defined.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function hasOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
            }
            exporter("hasOwnMetadata", hasOwnMetadata);
            /**
             * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.getMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function getMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetMetadata(metadataKey, target, propertyKey);
            }
            exporter("getMetadata", getMetadata);
            /**
             * Gets the metadata value for the provided metadata key on the target object.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.getOwnMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function getOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
            }
            exporter("getOwnMetadata", getOwnMetadata);
            /**
             * Gets the metadata keys defined on the target object or its prototype chain.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns An array of unique metadata keys.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.getMetadataKeys(Example);
             *
             *     // property (on constructor)
             *     result = Reflect.getMetadataKeys(Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.getMetadataKeys(Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.getMetadataKeys(Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.getMetadataKeys(Example.prototype, "method");
             *
             */
            function getMetadataKeys(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryMetadataKeys(target, propertyKey);
            }
            exporter("getMetadataKeys", getMetadataKeys);
            /**
             * Gets the unique metadata keys defined on the target object.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns An array of unique metadata keys.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.getOwnMetadataKeys(Example);
             *
             *     // property (on constructor)
             *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
             *
             */
            function getOwnMetadataKeys(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryOwnMetadataKeys(target, propertyKey);
            }
            exporter("getOwnMetadataKeys", getOwnMetadataKeys);
            /**
             * Deletes the metadata entry from the target object with the provided key.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns `true` if the metadata entry was found and deleted; otherwise, false.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.deleteMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function deleteMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return false;
                if (!metadataMap.delete(metadataKey))
                    return false;
                if (metadataMap.size > 0)
                    return true;
                var targetMetadata = Metadata.get(target);
                targetMetadata.delete(propertyKey);
                if (targetMetadata.size > 0)
                    return true;
                Metadata.delete(target);
                return true;
            }
            exporter("deleteMetadata", deleteMetadata);
            function DecorateConstructor(decorators, target) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsConstructor(decorated))
                            throw new TypeError();
                        target = decorated;
                    }
                }
                return target;
            }
            function DecorateProperty(decorators, target, propertyKey, descriptor) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target, propertyKey, descriptor);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsObject(decorated))
                            throw new TypeError();
                        descriptor = decorated;
                    }
                }
                return descriptor;
            }
            function GetOrCreateMetadataMap(O, P, Create) {
                var targetMetadata = Metadata.get(O);
                if (IsUndefined(targetMetadata)) {
                    if (!Create)
                        return undefined;
                    targetMetadata = new _Map();
                    Metadata.set(O, targetMetadata);
                }
                var metadataMap = targetMetadata.get(P);
                if (IsUndefined(metadataMap)) {
                    if (!Create)
                        return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                }
                return metadataMap;
            }
            // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
            function OrdinaryHasMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn)
                    return true;
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent))
                    return OrdinaryHasMetadata(MetadataKey, parent, P);
                return false;
            }
            // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return false;
                return ToBoolean(metadataMap.has(MetadataKey));
            }
            // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
            function OrdinaryGetMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn)
                    return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent))
                    return OrdinaryGetMetadata(MetadataKey, parent, P);
                return undefined;
            }
            // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return undefined;
                return metadataMap.get(MetadataKey);
            }
            // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
                metadataMap.set(MetadataKey, MetadataValue);
            }
            // 3.1.6.1 OrdinaryMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
            function OrdinaryMetadataKeys(O, P) {
                var ownKeys = OrdinaryOwnMetadataKeys(O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (parent === null)
                    return ownKeys;
                var parentKeys = OrdinaryMetadataKeys(parent, P);
                if (parentKeys.length <= 0)
                    return ownKeys;
                if (ownKeys.length <= 0)
                    return parentKeys;
                var set = new _Set();
                var keys = [];
                for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                    var key = ownKeys_1[_i];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                    var key = parentKeys_1[_a];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                return keys;
            }
            // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
            function OrdinaryOwnMetadataKeys(O, P) {
                var keys = [];
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return keys;
                var keysObj = metadataMap.keys();
                var iterator = GetIterator(keysObj);
                var k = 0;
                while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                        keys.length = k;
                        return keys;
                    }
                    var nextValue = IteratorValue(next);
                    try {
                        keys[k] = nextValue;
                    }
                    catch (e) {
                        try {
                            IteratorClose(iterator);
                        }
                        finally {
                            throw e;
                        }
                    }
                    k++;
                }
            }
            // 6 ECMAScript Data Typ0es and Values
            // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
            function Type(x) {
                if (x === null)
                    return 1 /* Null */;
                switch (typeof x) {
                    case "undefined": return 0 /* Undefined */;
                    case "boolean": return 2 /* Boolean */;
                    case "string": return 3 /* String */;
                    case "symbol": return 4 /* Symbol */;
                    case "number": return 5 /* Number */;
                    case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                    default: return 6 /* Object */;
                }
            }
            // 6.1.1 The Undefined Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
            function IsUndefined(x) {
                return x === undefined;
            }
            // 6.1.2 The Null Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
            function IsNull(x) {
                return x === null;
            }
            // 6.1.5 The Symbol Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
            function IsSymbol(x) {
                return typeof x === "symbol";
            }
            // 6.1.7 The Object Type
            // https://tc39.github.io/ecma262/#sec-object-type
            function IsObject(x) {
                return typeof x === "object" ? x !== null : typeof x === "function";
            }
            // 7.1 Type Conversion
            // https://tc39.github.io/ecma262/#sec-type-conversion
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // https://tc39.github.io/ecma262/#sec-toprimitive
            function ToPrimitive(input, PreferredType) {
                switch (Type(input)) {
                    case 0 /* Undefined */: return input;
                    case 1 /* Null */: return input;
                    case 2 /* Boolean */: return input;
                    case 3 /* String */: return input;
                    case 4 /* Symbol */: return input;
                    case 5 /* Number */: return input;
                }
                var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
                var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                if (exoticToPrim !== undefined) {
                    var result = exoticToPrim.call(input, hint);
                    if (IsObject(result))
                        throw new TypeError();
                    return result;
                }
                return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
            }
            // 7.1.1.1 OrdinaryToPrimitive(O, hint)
            // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
            function OrdinaryToPrimitive(O, hint) {
                if (hint === "string") {
                    var toString_1 = O.toString;
                    if (IsCallable(toString_1)) {
                        var result = toString_1.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                }
                else {
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                    var toString_2 = O.toString;
                    if (IsCallable(toString_2)) {
                        var result = toString_2.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                }
                throw new TypeError();
            }
            // 7.1.2 ToBoolean(argument)
            // https://tc39.github.io/ecma262/2016/#sec-toboolean
            function ToBoolean(argument) {
                return !!argument;
            }
            // 7.1.12 ToString(argument)
            // https://tc39.github.io/ecma262/#sec-tostring
            function ToString(argument) {
                return "" + argument;
            }
            // 7.1.14 ToPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-topropertykey
            function ToPropertyKey(argument) {
                var key = ToPrimitive(argument, 3 /* String */);
                if (IsSymbol(key))
                    return key;
                return ToString(key);
            }
            // 7.2 Testing and Comparison Operations
            // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
            // 7.2.2 IsArray(argument)
            // https://tc39.github.io/ecma262/#sec-isarray
            function IsArray(argument) {
                return Array.isArray
                    ? Array.isArray(argument)
                    : argument instanceof Object
                        ? argument instanceof Array
                        : Object.prototype.toString.call(argument) === "[object Array]";
            }
            // 7.2.3 IsCallable(argument)
            // https://tc39.github.io/ecma262/#sec-iscallable
            function IsCallable(argument) {
                // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
                return typeof argument === "function";
            }
            // 7.2.4 IsConstructor(argument)
            // https://tc39.github.io/ecma262/#sec-isconstructor
            function IsConstructor(argument) {
                // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
                return typeof argument === "function";
            }
            // 7.2.7 IsPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-ispropertykey
            function IsPropertyKey(argument) {
                switch (Type(argument)) {
                    case 3 /* String */: return true;
                    case 4 /* Symbol */: return true;
                    default: return false;
                }
            }
            // 7.3 Operations on Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-objects
            // 7.3.9 GetMethod(V, P)
            // https://tc39.github.io/ecma262/#sec-getmethod
            function GetMethod(V, P) {
                var func = V[P];
                if (func === undefined || func === null)
                    return undefined;
                if (!IsCallable(func))
                    throw new TypeError();
                return func;
            }
            // 7.4 Operations on Iterator Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
            function GetIterator(obj) {
                var method = GetMethod(obj, iteratorSymbol);
                if (!IsCallable(method))
                    throw new TypeError(); // from Call
                var iterator = method.call(obj);
                if (!IsObject(iterator))
                    throw new TypeError();
                return iterator;
            }
            // 7.4.4 IteratorValue(iterResult)
            // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
            function IteratorValue(iterResult) {
                return iterResult.value;
            }
            // 7.4.5 IteratorStep(iterator)
            // https://tc39.github.io/ecma262/#sec-iteratorstep
            function IteratorStep(iterator) {
                var result = iterator.next();
                return result.done ? false : result;
            }
            // 7.4.6 IteratorClose(iterator, completion)
            // https://tc39.github.io/ecma262/#sec-iteratorclose
            function IteratorClose(iterator) {
                var f = iterator["return"];
                if (f)
                    f.call(iterator);
            }
            // 9.1 Ordinary Object Internal Methods and Internal Slots
            // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
            // 9.1.1.1 OrdinaryGetPrototypeOf(O)
            // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
            function OrdinaryGetPrototypeOf(O) {
                var proto = Object.getPrototypeOf(O);
                if (typeof O !== "function" || O === functionPrototype)
                    return proto;
                // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
                // Try to determine the superclass constructor. Compatible implementations
                // must either set __proto__ on a subclass constructor to the superclass constructor,
                // or ensure each class has a valid `constructor` property on its prototype that
                // points back to the constructor.
                // If this is not the same as Function.[[Prototype]], then this is definately inherited.
                // This is the case when in ES6 or when using __proto__ in a compatible browser.
                if (proto !== functionPrototype)
                    return proto;
                // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
                var prototype = O.prototype;
                var prototypeProto = prototype && Object.getPrototypeOf(prototype);
                if (prototypeProto == null || prototypeProto === Object.prototype)
                    return proto;
                // If the constructor was not a function, then we cannot determine the heritage.
                var constructor = prototypeProto.constructor;
                if (typeof constructor !== "function")
                    return proto;
                // If we have some kind of self-reference, then we cannot determine the heritage.
                if (constructor === O)
                    return proto;
                // we have a pretty good guess at the heritage.
                return constructor;
            }
            // naive Map shim
            function CreateMapPolyfill() {
                var cacheSentinel = {};
                var arraySentinel = [];
                var MapIterator = /** @class */ (function () {
                    function MapIterator(keys, values, selector) {
                        this._index = 0;
                        this._keys = keys;
                        this._values = values;
                        this._selector = selector;
                    }
                    MapIterator.prototype["@@iterator"] = function () { return this; };
                    MapIterator.prototype[iteratorSymbol] = function () { return this; };
                    MapIterator.prototype.next = function () {
                        var index = this._index;
                        if (index >= 0 && index < this._keys.length) {
                            var result = this._selector(this._keys[index], this._values[index]);
                            if (index + 1 >= this._keys.length) {
                                this._index = -1;
                                this._keys = arraySentinel;
                                this._values = arraySentinel;
                            }
                            else {
                                this._index++;
                            }
                            return { value: result, done: false };
                        }
                        return { value: undefined, done: true };
                    };
                    MapIterator.prototype.throw = function (error) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        throw error;
                    };
                    MapIterator.prototype.return = function (value) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        return { value: value, done: true };
                    };
                    return MapIterator;
                }());
                return /** @class */ (function () {
                    function Map() {
                        this._keys = [];
                        this._values = [];
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    Object.defineProperty(Map.prototype, "size", {
                        get: function () { return this._keys.length; },
                        enumerable: true,
                        configurable: true
                    });
                    Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                    Map.prototype.get = function (key) {
                        var index = this._find(key, /*insert*/ false);
                        return index >= 0 ? this._values[index] : undefined;
                    };
                    Map.prototype.set = function (key, value) {
                        var index = this._find(key, /*insert*/ true);
                        this._values[index] = value;
                        return this;
                    };
                    Map.prototype.delete = function (key) {
                        var index = this._find(key, /*insert*/ false);
                        if (index >= 0) {
                            var size = this._keys.length;
                            for (var i = index + 1; i < size; i++) {
                                this._keys[i - 1] = this._keys[i];
                                this._values[i - 1] = this._values[i];
                            }
                            this._keys.length--;
                            this._values.length--;
                            if (key === this._cacheKey) {
                                this._cacheKey = cacheSentinel;
                                this._cacheIndex = -2;
                            }
                            return true;
                        }
                        return false;
                    };
                    Map.prototype.clear = function () {
                        this._keys.length = 0;
                        this._values.length = 0;
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    };
                    Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                    Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                    Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                    Map.prototype["@@iterator"] = function () { return this.entries(); };
                    Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                    Map.prototype._find = function (key, insert) {
                        if (this._cacheKey !== key) {
                            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                        }
                        if (this._cacheIndex < 0 && insert) {
                            this._cacheIndex = this._keys.length;
                            this._keys.push(key);
                            this._values.push(undefined);
                        }
                        return this._cacheIndex;
                    };
                    return Map;
                }());
                function getKey(key, _) {
                    return key;
                }
                function getValue(_, value) {
                    return value;
                }
                function getEntry(key, value) {
                    return [key, value];
                }
            }
            // naive Set shim
            function CreateSetPolyfill() {
                return /** @class */ (function () {
                    function Set() {
                        this._map = new _Map();
                    }
                    Object.defineProperty(Set.prototype, "size", {
                        get: function () { return this._map.size; },
                        enumerable: true,
                        configurable: true
                    });
                    Set.prototype.has = function (value) { return this._map.has(value); };
                    Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                    Set.prototype.delete = function (value) { return this._map.delete(value); };
                    Set.prototype.clear = function () { this._map.clear(); };
                    Set.prototype.keys = function () { return this._map.keys(); };
                    Set.prototype.values = function () { return this._map.values(); };
                    Set.prototype.entries = function () { return this._map.entries(); };
                    Set.prototype["@@iterator"] = function () { return this.keys(); };
                    Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                    return Set;
                }());
            }
            // naive WeakMap shim
            function CreateWeakMapPolyfill() {
                var UUID_SIZE = 16;
                var keys = HashMap.create();
                var rootKey = CreateUniqueKey();
                return /** @class */ (function () {
                    function WeakMap() {
                        this._key = CreateUniqueKey();
                    }
                    WeakMap.prototype.has = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                        return table !== undefined ? HashMap.has(table, this._key) : false;
                    };
                    WeakMap.prototype.get = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                        return table !== undefined ? HashMap.get(table, this._key) : undefined;
                    };
                    WeakMap.prototype.set = function (target, value) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                        table[this._key] = value;
                        return this;
                    };
                    WeakMap.prototype.delete = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                        return table !== undefined ? delete table[this._key] : false;
                    };
                    WeakMap.prototype.clear = function () {
                        // NOTE: not a real clear, just makes the previous data unreachable
                        this._key = CreateUniqueKey();
                    };
                    return WeakMap;
                }());
                function CreateUniqueKey() {
                    var key;
                    do
                        key = "@@WeakMap@@" + CreateUUID();
                    while (HashMap.has(keys, key));
                    keys[key] = true;
                    return key;
                }
                function GetOrCreateWeakMapTable(target, create) {
                    if (!hasOwn.call(target, rootKey)) {
                        if (!create)
                            return undefined;
                        Object.defineProperty(target, rootKey, { value: HashMap.create() });
                    }
                    return target[rootKey];
                }
                function FillRandomBytes(buffer, size) {
                    for (var i = 0; i < size; ++i)
                        buffer[i] = Math.random() * 0xff | 0;
                    return buffer;
                }
                function GenRandomBytes(size) {
                    if (typeof Uint8Array === "function") {
                        if (typeof crypto !== "undefined")
                            return crypto.getRandomValues(new Uint8Array(size));
                        if (typeof msCrypto !== "undefined")
                            return msCrypto.getRandomValues(new Uint8Array(size));
                        return FillRandomBytes(new Uint8Array(size), size);
                    }
                    return FillRandomBytes(new Array(size), size);
                }
                function CreateUUID() {
                    var data = GenRandomBytes(UUID_SIZE);
                    // mark as random - RFC 4122 § 4.4
                    data[6] = data[6] & 0x4f | 0x40;
                    data[8] = data[8] & 0xbf | 0x80;
                    var result = "";
                    for (var offset = 0; offset < UUID_SIZE; ++offset) {
                        var byte = data[offset];
                        if (offset === 4 || offset === 6 || offset === 8)
                            result += "-";
                        if (byte < 16)
                            result += "0";
                        result += byte.toString(16).toLowerCase();
                    }
                    return result;
                }
            }
            // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
            function MakeDictionary(obj) {
                obj.__ = undefined;
                delete obj.__;
                return obj;
            }
        });
    })(Reflect$1 || (Reflect$1 = {}));

    var metadataInstanceMap = createDefaultValueMap(function () { return new Set(); });
    var MetadataInstanceManager = /** @class */ (function () {
        function MetadataInstanceManager() {
        }
        MetadataInstanceManager.getMetadata = function (target, metadataClass) {
            var key = metadataClass.getReflectKey();
            var metadata = Reflect.getMetadata(key, target);
            if (!metadata) {
                metadata = new metadataClass();
                metadata.init(target);
                Reflect.defineMetadata(key, metadata, target);
                var instanceSet = metadataInstanceMap.get(metadataClass);
                instanceSet.add(metadata);
            }
            return metadata;
        };
        MetadataInstanceManager.getAllInstanceof = function (metadataClass) {
            return Array.from(metadataInstanceMap.get(metadataClass));
        };
        return MetadataInstanceManager;
    }());

    var CLASS_METADATA_KEY = 'ioc:class-metadata';
    var MarkInfoContainer = /** @class */ (function () {
        function MarkInfoContainer() {
            this.map = createDefaultValueMap(function () { return ({}); });
        }
        MarkInfoContainer.prototype.getMarkInfo = function (method) {
            return this.map.get(method);
        };
        MarkInfoContainer.prototype.mark = function (method, key, value) {
            var markInfo = this.map.get(method);
            markInfo[key] = value;
        };
        MarkInfoContainer.prototype.getMembers = function () {
            return new Set(this.map.keys());
        };
        return MarkInfoContainer;
    }());
    var ParameterMarkInfoContainer = /** @class */ (function () {
        function ParameterMarkInfoContainer() {
            this.map = createDefaultValueMap(function () {
                return {};
            });
        }
        ParameterMarkInfoContainer.prototype.getMarkInfo = function (method) {
            return this.map.get(method);
        };
        ParameterMarkInfoContainer.prototype.mark = function (method, index, key, value) {
            var paramsMarkInfo = this.map.get(method);
            var markInfo = paramsMarkInfo[index] || {};
            markInfo[key] = value;
            paramsMarkInfo[index] = markInfo;
        };
        return ParameterMarkInfoContainer;
    }());
    var ClassMetadata = /** @class */ (function () {
        function ClassMetadata() {
            this.scope = exports.InstanceScope.SINGLETON;
            this.constructorParameterTypes = [];
            this.lifecycleMethodsMap = {};
            this.propertyTypesMap = new Map();
            this.marks = {
                ctor: {},
                members: new MarkInfoContainer(),
                params: new ParameterMarkInfoContainer()
            };
        }
        ClassMetadata.getReflectKey = function () {
            return CLASS_METADATA_KEY;
        };
        ClassMetadata.getInstance = function (ctor) {
            return MetadataInstanceManager.getMetadata(ctor, ClassMetadata);
        };
        ClassMetadata.prototype.init = function (target) {
            this.clazz = target;
            var constr = target;
            if (typeof constr.scope === 'function') {
                this.setScope(constr.scope());
            }
            if (typeof constr.inject === 'function') {
                var injections = constr.inject();
                for (var key in injections) {
                    this.recordPropertyType(key, injections[key]);
                }
            }
            if (typeof constr.metadata === 'function') {
                var metadata = constr.metadata();
                if (metadata.scope) {
                    this.setScope(metadata.scope);
                }
                var injections = metadata.inject;
                if (injections) {
                    for (var key in injections) {
                        this.recordPropertyType(key, injections[key]);
                    }
                }
            }
        };
        ClassMetadata.prototype.marker = function () {
            var _this = this;
            return {
                ctor: function (key, value) {
                    _this.marks.ctor[key] = value;
                },
                member: function (propertyKey) {
                    return {
                        mark: function (key, value) {
                            _this.marks.members.mark(propertyKey, key, value);
                        }
                    };
                },
                parameter: function (propertyKey, index) {
                    return {
                        mark: function (key, value) {
                            _this.marks.params.mark(propertyKey, index, key, value);
                        }
                    };
                }
            };
        };
        ClassMetadata.prototype.setScope = function (scope) {
            this.scope = scope;
        };
        ClassMetadata.prototype.setConstructorParameterType = function (index, cls) {
            this.constructorParameterTypes[index] = cls;
        };
        ClassMetadata.prototype.recordPropertyType = function (propertyKey, type) {
            this.propertyTypesMap.set(propertyKey, type);
        };
        ClassMetadata.prototype.addLifecycleMethod = function (methodName, lifecycle) {
            var lifecycles = this.getLifecycles(methodName);
            lifecycles.add(lifecycle);
            this.lifecycleMethodsMap[methodName] = lifecycles;
        };
        ClassMetadata.prototype.getLifecycles = function (methodName) {
            return this.lifecycleMethodsMap[methodName] || new Set();
        };
        ClassMetadata.prototype.getMethods = function (lifecycle) {
            var _this = this;
            return Object.keys(this.lifecycleMethodsMap).filter(function (it) {
                var lifecycles = _this.lifecycleMethodsMap[it];
                return lifecycles.has(lifecycle);
            });
        };
        ClassMetadata.prototype.reader = function () {
            var _this = this;
            return {
                getClass: function () { return _this.clazz; },
                getScope: function () {
                    return _this.scope;
                },
                getConstructorParameterTypes: function () {
                    return _this.constructorParameterTypes.slice(0);
                },
                getMethods: function (lifecycle) {
                    return _this.getMethods(lifecycle);
                },
                getPropertyTypeMap: function () { return new Map(_this.propertyTypesMap); },
                getCtorMarkInfo: function () {
                    return __assign({}, _this.marks.ctor);
                },
                getAllMarkedMembers: function () {
                    return _this.marks.members.getMembers();
                },
                getMembersMarkInfo: function (key) {
                    return _this.marks.members.getMarkInfo(key);
                },
                getParameterMarkInfo: function (methodKey) {
                    return _this.marks.params.getMarkInfo(methodKey);
                }
            };
        };
        return ClassMetadata;
    }());

    var ServiceFactoryDef = /** @class */ (function () {
        function ServiceFactoryDef(factory, injections) {
            this.factory = factory;
            this.injections = injections;
        }
        ServiceFactoryDef.createFromClassMetadata = function (metadata) {
            return new ServiceFactoryDef(function (container, owner) {
                return function () {
                    var reader = metadata.reader();
                    var clazz = reader.getClass();
                    return container.getInstance(clazz, owner);
                };
            });
        };
        return ServiceFactoryDef;
    }());

    var GlobalMetadata = /** @class */ (function () {
        function GlobalMetadata() {
            this.classAliasMetadataMap = new Map();
            this.componentFactories = new Map();
            this.processorClasses = new Set();
        }
        GlobalMetadata.getInstance = function () {
            return GlobalMetadata.INSTANCE;
        };
        GlobalMetadata.prototype.recordFactory = function (symbol, factory, injections) {
            this.componentFactories.set(symbol, new ServiceFactoryDef(factory, injections));
        };
        GlobalMetadata.prototype.recordClassAlias = function (aliasName, metadata) {
            this.classAliasMetadataMap.set(aliasName, metadata);
        };
        GlobalMetadata.prototype.recordProcessorClass = function (clazz) {
            this.processorClasses.add(clazz);
        };
        GlobalMetadata.prototype.init = function () {
            // PASS;
        };
        GlobalMetadata.prototype.reader = function () {
            var _this = this;
            return {
                getComponentFactory: function (key) {
                    return _this.componentFactories.get(key);
                },
                getClassMetadata: function (aliasName) {
                    return _this.classAliasMetadataMap.get(aliasName);
                },
                getInstAwareProcessorClasses: function () {
                    return Array.from(_this.processorClasses);
                }
            };
        };
        GlobalMetadata.INSTANCE = new GlobalMetadata();
        return GlobalMetadata;
    }());

    exports.ExpressionType = void 0;
    (function (ExpressionType) {
        ExpressionType["ENV"] = "inject-environment-variables";
        ExpressionType["JSON_PATH"] = "inject-json-data";
        ExpressionType["ARGV"] = "inject-argv";
    })(exports.ExpressionType || (exports.ExpressionType = {}));

    var isNodeJs = (function () {
        try {
            eval('require("os").arch();');
            return true;
        }
        catch (e) {
            return false;
        }
    })();

    function Value(expression, type, externalArgs) {
        switch (type) {
            case exports.ExpressionType.ENV:
            case exports.ExpressionType.ARGV:
                if (!isNodeJs) {
                    throw new Error("The \"".concat(type, "\" evaluator only supports nodejs environment!"));
                }
        }
        return function (target, propertyKey) {
            var metadata = MetadataInstanceManager.getMetadata(target.constructor, ClassMetadata);
            var value_symbol = Symbol('');
            metadata.recordPropertyType(propertyKey, value_symbol);
            GlobalMetadata.getInstance().recordFactory(value_symbol, function (container, owner) {
                return function () {
                    return container.evaluate(expression, {
                        owner: owner,
                        type: type,
                        externalArgs: externalArgs
                    });
                };
            });
        };
    }

    function Argv(name, argv) {
        if (argv === void 0) { argv = process.argv; }
        return Value(name, exports.ExpressionType.ARGV, argv);
    }

    function Bind(aliasName) {
        return function (target) {
            var metadata = MetadataInstanceManager.getMetadata(target, ClassMetadata);
            GlobalMetadata.getInstance().recordClassAlias(aliasName, metadata);
        };
    }

    function Env(name) {
        return Value(name, exports.ExpressionType.ENV);
    }

    function isNull(value) {
        return value === null;
    }
    function isUndefined(value) {
        return value === undefined;
    }
    function isNotDefined(value) {
        return isNull(value) || isUndefined(value);
    }

    function Factory(produceIdentifier) {
        return function (target, propertyKey) {
            var metadata = GlobalMetadata.getInstance();
            var clazz = target.constructor;
            if (isNotDefined(produceIdentifier)) {
                produceIdentifier = Reflect.getMetadata('design:returntype', target, propertyKey);
            }
            if (isNotDefined(produceIdentifier)) {
                throw new Error('The return type not recognized, cannot perform instance creation!');
            }
            var injections = Reflect.getMetadata('design:paramtypes', target, propertyKey);
            metadata.recordFactory(produceIdentifier, function (container, owner) {
                var instance = container.getInstance(clazz, owner);
                var func = instance[propertyKey];
                if (typeof func === 'function') {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var instance = container.getInstance(clazz);
                        return func.apply(instance, args);
                    };
                }
                else {
                    return function () { return func; };
                }
            }, injections);
        };
    }

    function Inject(constr) {
        return function (target, propertyKey, parameterIndex) {
            if (typeof target === 'function' && typeof parameterIndex === 'number') {
                // constructor parameter
                var targetConstr = target;
                if (isNotDefined(constr)) {
                    constr = Reflect.getMetadata('design:paramtypes', target, propertyKey)[parameterIndex];
                }
                if (isNotDefined(constr)) {
                    throw new Error('Type not recognized, injection cannot be performed');
                }
                var classMetadata = MetadataInstanceManager.getMetadata(targetConstr, ClassMetadata);
                classMetadata.setConstructorParameterType(parameterIndex, constr);
            }
            else if (typeof target === 'object' && target !== null && propertyKey !== undefined) {
                // property
                if (isNotDefined(constr)) {
                    constr = Reflect.getMetadata('design:type', target, propertyKey);
                }
                if (isNotDefined(constr)) {
                    throw new Error('Type not recognized, injection cannot be performed');
                }
                var metadata = MetadataInstanceManager.getMetadata(target.constructor, ClassMetadata);
                metadata.recordPropertyType(propertyKey, constr);
            }
        };
    }

    function InstAwareProcessor() {
        return function (target) {
            GlobalMetadata.getInstance().recordProcessorClass(target);
            return target;
        };
    }

    function JSONData(namespace, jsonpath) {
        return Value("".concat(namespace, ":").concat(jsonpath), exports.ExpressionType.JSON_PATH);
    }

    /**
     * Urn calls the methods annotated with @PostInject only once, just after the injection of properties.
     * @annotation
     */
    var LifecycleDecorator = function (lifecycle) {
        return function (target, propertyKey) {
            var metadata = MetadataInstanceManager.getMetadata(target.constructor, ClassMetadata);
            metadata.addLifecycleMethod(propertyKey, lifecycle);
        };
    };

    function Mark(key, value) {
        if (value === void 0) { value = true; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length === 1) {
                // class decorator
                var metadata = MetadataInstanceManager.getMetadata(args[0], ClassMetadata);
                metadata.marker().ctor(key, value);
            }
            else if (args.length === 2) {
                // property decorator
                var _a = __read(args, 2), prototype = _a[0], propertyKey = _a[1];
                var metadata = MetadataInstanceManager.getMetadata(prototype.constructor, ClassMetadata);
                metadata.marker().member(propertyKey).mark(key, value);
            }
            else if (args.length === 3 && typeof args[2] === 'number') {
                // parameter decorator
                var _b = __read(args, 3), prototype = _b[0], propertyKey = _b[1], index = _b[2];
                var metadata = MetadataInstanceManager.getMetadata(prototype.constructor, ClassMetadata);
                metadata.marker().parameter(propertyKey, index).mark(key, value);
            }
            else {
                // method decorator
                var _c = __read(args, 2), prototype = _c[0], propertyKey = _c[1];
                var metadata = MetadataInstanceManager.getMetadata(prototype.constructor, ClassMetadata);
                metadata.marker().member(propertyKey).mark(key, value);
            }
        };
    }

    exports.Lifecycle = void 0;
    (function (Lifecycle) {
        Lifecycle["PRE_INJECT"] = "ioc-scope:pre-inject";
        Lifecycle["POST_INJECT"] = "ioc-scope:post-inject";
        Lifecycle["PRE_DESTROY"] = "ioc-scope:pre-destroy";
    })(exports.Lifecycle || (exports.Lifecycle = {}));

    /**
     * Urn calls the methods annotated with @PostInject only once, just after the injection of properties.
     * @annotation
     */
    var PostInject = function () { return LifecycleDecorator(exports.Lifecycle.POST_INJECT); };

    var PreDestroy = function () { return LifecycleDecorator(exports.Lifecycle.PRE_DESTROY); };

    /**
     * Urn calls the methods annotated with @PostInject only once, just after the injection of properties.
     * @annotation
     */
    var PreInject = function () { return LifecycleDecorator(exports.Lifecycle.PRE_INJECT); };

    function Scope(scope) {
        return function (target) {
            var metadata = MetadataInstanceManager.getMetadata(target, ClassMetadata);
            metadata.setScope(scope);
        };
    }

    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
            this.events = new Map();
        }
        EventEmitter.prototype.on = function (type, listener) {
            var listeners = this.events.get(type);
            if (listeners) {
                if (listeners.indexOf(listener) == -1) {
                    listeners.push(listener);
                }
            }
            else {
                listeners = [listener];
                this.events.set(type, listeners);
            }
            return function () {
                var ls = listeners;
                var index = ls.indexOf(listener);
                if (index > -1) {
                    ls.splice(index, 1);
                }
            };
        };
        EventEmitter.prototype.emit = function (type) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            (_a = this.events.get(type)) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
                fn.apply(void 0, __spreadArray([], __read(args), false));
            });
        };
        return EventEmitter;
    }());

    function hasArgs(options) {
        return 'args' in options;
    }
    function hasInjections(options) {
        return 'injections' in options;
    }

    var index_cjs = {};

    var lazyProp;
    var lazyMember;
    Object.defineProperty(index_cjs,"__esModule",{value:!0});
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var e=function(){return e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},e.apply(this,arguments)};function t(){}var r={},n=function(){function e(e){this.evaluateResult=r,this.context=e.target,this.computeFn=e.evaluate,this.resetTester=e.resetTesters;}return e.prototype.release=function(){this.reset(t);},e.prototype.reset=function(e){this.evaluateResult=r,this.computeFn=e||this.computeFn;},e.prototype.evaluate=function(){this.isPresent()&&!this.needReset()||(this.evaluateResult=this.computeFn.call(this.context,this.context));},e.prototype.get=function(){return this.evaluate(),this.evaluateResult},e.prototype.isPresent=function(){return this.evaluateResult!==r},e.prototype.needReset=function(){var e=this;return this.resetTester.some((function(t){return t(e.context)}))},e}();function o(t,r,o){var u;u="function"==typeof o?{evaluate:o}:e({},o);var a=Object.getOwnPropertyDescriptor(t,r);if(a&&!a.configurable)throw new Error("Cannot override override property: "+String(r));var i="boolean"==typeof u.enumerable?u.enumerable:(null==a?void 0:a.enumerable)||!0,s=u.resetBy||[],l=function(){return function(e,t,r,o){e.__lazy__||Object.defineProperty(e,"__lazy__",{value:{},enumerable:!1,writable:!1,configurable:!1});var u=e.__lazy__;if(!u[t]){var a=o.map((function(e){return "string"==typeof e||"number"==typeof e||"symbol"==typeof e?function(e){var t;return function(r){var n=r[e],o=n!==t;return t=n,o}}(e):(t=e,function(e){var n=t(e),o=n!==r;return r=n,o});var t,r;}));u[t]=new n({target:e,evaluate:r,resetTesters:a});}return u[t]}(this,r,u.evaluate,s)};return Object.defineProperty(t,r,{configurable:!0,enumerable:i,get:function(){return l.call(this).get()}}),l}function u(e,t,r){return o(e,t,r).call(e)}lazyMember = index_cjs.lazyMember=function(e){return function(t,r){o(t,r,e);}},index_cjs.lazyMemberOfClass=function(e,t,r){o(e.prototype,t,r);},lazyProp = index_cjs.lazyProp=u,index_cjs.lazyVal=function(e){return u({__val__:null},"__val__",e)};

    var LifecycleManager = /** @class */ (function () {
        function LifecycleManager(componentClass, container) {
            this.componentClass = componentClass;
            this.container = container;
            this.classMetadataReader = MetadataInstanceManager.getMetadata(this.componentClass, ClassMetadata).reader();
        }
        LifecycleManager.prototype.invokePreInjectMethod = function (instance) {
            var methods = this.classMetadataReader.getMethods(exports.Lifecycle.PRE_INJECT);
            this.invokeLifecycleMethods(instance, methods);
        };
        LifecycleManager.prototype.invokePostInjectMethod = function (instance) {
            var methods = this.classMetadataReader.getMethods(exports.Lifecycle.POST_INJECT);
            this.invokeLifecycleMethods(instance, methods);
        };
        LifecycleManager.prototype.invokePreDestroyInjectMethod = function (instance) {
            var methods = this.classMetadataReader.getMethods(exports.Lifecycle.PRE_DESTROY);
            this.invokeLifecycleMethods(instance, methods);
        };
        LifecycleManager.prototype.invokeLifecycleMethods = function (instance, methodKeys) {
            var _this = this;
            methodKeys.forEach(function (key) {
                _this.container.invoke(instance[key], {
                    context: instance
                });
            });
        };
        return LifecycleManager;
    }());

    var ComponentInstanceBuilder = /** @class */ (function () {
        function ComponentInstanceBuilder(componentClass, container, instAwareProcessorManager) {
            this.componentClass = componentClass;
            this.container = container;
            this.instAwareProcessorManager = instAwareProcessorManager;
            this.getConstructorArgs = function () { return []; };
            this.propertyFactories = {};
            this.lazyMode = true;
            this.lifecycleResolver = new LifecycleManager(componentClass, container);
            var reader = MetadataInstanceManager.getMetadata(componentClass, ClassMetadata).reader();
            this.appendClassMetadata(reader);
        }
        ComponentInstanceBuilder.prototype.appendLazyMode = function (lazyMode) {
            this.lazyMode = lazyMode;
        };
        ComponentInstanceBuilder.prototype.appendClassMetadata = function (classMetadataReader) {
            var e_1, _a;
            var _this = this;
            var types = classMetadataReader.getConstructorParameterTypes();
            this.getConstructorArgs = function () {
                return types.map(function (it) {
                    return _this.container.getInstance(it);
                });
            };
            var globalMetadataReader = GlobalMetadata.getInstance().reader();
            var properties = classMetadataReader.getPropertyTypeMap();
            var _loop_1 = function (propertyName, propertyType) {
                if (typeof propertyType === 'function') {
                    this_1.propertyFactories[propertyName] = new ServiceFactoryDef(function (container, owner) {
                        return function () { return container.getInstance(propertyType, owner); };
                    });
                    return "continue";
                }
                var factory = this_1.container.getFactory(propertyType);
                if (factory) {
                    this_1.propertyFactories[propertyName] = factory;
                    return "continue";
                }
                var propertyClassMetadata = globalMetadataReader.getClassMetadata(propertyType);
                if (propertyClassMetadata) {
                    this_1.propertyFactories[propertyName] = ServiceFactoryDef.createFromClassMetadata(propertyClassMetadata);
                    return "continue";
                }
                var propertyFactory = globalMetadataReader.getComponentFactory(propertyType);
                if (propertyFactory) {
                    this_1.propertyFactories[propertyName] = propertyFactory;
                    return "continue";
                }
            };
            var this_1 = this;
            try {
                for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                    var _b = __read(properties_1_1.value, 2), propertyName = _b[0], propertyType = _b[1];
                    _loop_1(propertyName, propertyType);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        ComponentInstanceBuilder.prototype.build = function () {
            var _a, _b;
            var args = this.getConstructorArgs();
            var properties = this.createPropertiesGetterBuilder();
            var isCreatingInstAwareProcessor = this.instAwareProcessorManager.isInstAwareProcessorClass(this.componentClass);
            if (isCreatingInstAwareProcessor) {
                var instance = new ((_a = this.componentClass).bind.apply(_a, __spreadArray([void 0], __read(args), false)))();
                this.lifecycleResolver.invokePreInjectMethod(instance);
                for (var key in properties) {
                    var getter = properties[key](instance);
                    this.defineProperty(instance, key, getter);
                }
                this.lifecycleResolver.invokePostInjectMethod(instance);
                return instance;
            }
            else {
                var instance = this.instAwareProcessorManager.beforeInstantiation(this.componentClass, args);
                if (!instance) {
                    instance = new ((_b = this.componentClass).bind.apply(_b, __spreadArray([void 0], __read(args), false)))();
                }
                this.lifecycleResolver.invokePreInjectMethod(instance);
                for (var key in properties) {
                    var getter = properties[key](instance);
                    this.defineProperty(instance, key, getter);
                }
                instance = this.instAwareProcessorManager.afterInstantiation(instance);
                this.lifecycleResolver.invokePostInjectMethod(instance);
                return instance;
            }
        };
        ComponentInstanceBuilder.prototype.defineProperty = function (instance, key, getter) {
            if (this.lazyMode) {
                lazyProp(instance, key, getter);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                instance[key] = getter();
            }
        };
        ComponentInstanceBuilder.prototype.createPropertiesGetterBuilder = function () {
            var _this = this;
            var result = {};
            var _loop_2 = function (key) {
                var _a = this_2.propertyFactories[key], factory = _a.factory, injections = _a.injections;
                result[key] = function (instance) {
                    var fn = factory(_this.container, instance);
                    return function () {
                        return _this.container.invoke(fn, {
                            injections: injections
                        });
                    };
                };
            };
            var this_2 = this;
            for (var key in this.propertyFactories) {
                _loop_2(key);
            }
            return result;
        };
        return ComponentInstanceBuilder;
    }());

    var FUNCTION_METADATA_KEY = Symbol('ioc:function-metadata');
    var FunctionMetadata = /** @class */ (function () {
        function FunctionMetadata() {
            this.parameters = [];
            this.isFactory = false;
        }
        FunctionMetadata.getReflectKey = function () {
            return FUNCTION_METADATA_KEY;
        };
        FunctionMetadata.prototype.setParameterType = function (index, symbol) {
            this.parameters[index] = symbol;
        };
        FunctionMetadata.prototype.setScope = function (scope) {
            this.scope = scope;
        };
        FunctionMetadata.prototype.setIsFactory = function (isFactory) {
            this.isFactory = isFactory;
        };
        FunctionMetadata.prototype.init = function () {
            // PASS;
        };
        FunctionMetadata.prototype.reader = function () {
            var _this = this;
            return {
                getParameters: function () {
                    return _this.parameters.slice(0);
                },
                isFactory: function () { return _this.isFactory; },
                getScope: function () { return _this.scope; }
            };
        };
        return FunctionMetadata;
    }());

    var instanceSerialNo = -1;
    var ComponentInstanceWrapper = /** @class */ (function () {
        function ComponentInstanceWrapper(instance) {
            this.instance = instance;
            this.serialNo = ++instanceSerialNo;
        }
        ComponentInstanceWrapper.prototype.compareTo = function (other) {
            return this.serialNo > other.serialNo ? -1 : this.serialNo < other.serialNo ? 1 : 0;
        };
        return ComponentInstanceWrapper;
    }());

    function invokePreDestroy(instance) {
        var clazz = instance === null || instance === void 0 ? void 0 : instance.constructor;
        if (!clazz) {
            return;
        }
        var metadata = MetadataInstanceManager.getMetadata(clazz, ClassMetadata);
        var preDestroyMethods = metadata.getMethods(exports.Lifecycle.PRE_DESTROY);
        preDestroyMethods.forEach(function (methodName) {
            var method = clazz.prototype[methodName];
            if (typeof method === 'function') {
                method.apply(instance);
            }
        });
    }

    var SingletonInstanceResolution = /** @class */ (function () {
        function SingletonInstanceResolution() {
            this.INSTANCE_MAP = new Map();
        }
        SingletonInstanceResolution.prototype.getInstance = function (options) {
            var _a;
            return (_a = this.INSTANCE_MAP.get(options.identifier)) === null || _a === void 0 ? void 0 : _a.instance;
        };
        SingletonInstanceResolution.prototype.saveInstance = function (options) {
            this.INSTANCE_MAP.set(options.identifier, new ComponentInstanceWrapper(options.instance));
        };
        SingletonInstanceResolution.prototype.shouldGenerate = function (options) {
            return !this.INSTANCE_MAP.has(options.identifier);
        };
        SingletonInstanceResolution.prototype.destroy = function () {
            var instanceWrappers = Array.from(this.INSTANCE_MAP.values());
            instanceWrappers.sort(function (a, b) { return a.compareTo(b); });
            instanceWrappers.forEach(function (instanceWrapper) {
                invokePreDestroy(instanceWrapper.instance);
            });
            this.INSTANCE_MAP.clear();
        };
        return SingletonInstanceResolution;
    }());

    var SINGLETON_INSTANCE_SINGLETON = new SingletonInstanceResolution();
    var GlobalSharedInstanceResolution = /** @class */ (function () {
        function GlobalSharedInstanceResolution() {
        }
        GlobalSharedInstanceResolution.prototype.getInstance = function (options) {
            return SINGLETON_INSTANCE_SINGLETON.getInstance(options);
        };
        GlobalSharedInstanceResolution.prototype.saveInstance = function (options) {
            SINGLETON_INSTANCE_SINGLETON.saveInstance(options);
        };
        GlobalSharedInstanceResolution.prototype.shouldGenerate = function (options) {
            return SINGLETON_INSTANCE_SINGLETON.shouldGenerate(options);
        };
        GlobalSharedInstanceResolution.prototype.destroy = function () {
            // PASS;
        };
        return GlobalSharedInstanceResolution;
    }());

    var TransientInstanceResolution = /** @class */ (function () {
        function TransientInstanceResolution() {
            this.instances = new Set();
        }
        TransientInstanceResolution.prototype.shouldGenerate = function () {
            return true;
        };
        TransientInstanceResolution.prototype.getInstance = function () {
            return;
        };
        TransientInstanceResolution.prototype.saveInstance = function (options) {
            this.instances.add(options.instance);
        };
        TransientInstanceResolution.prototype.destroy = function () {
            this.instances.forEach(function (it) {
                if (!it) {
                    return;
                }
                invokePreDestroy(it);
            });
            this.instances.clear();
        };
        return TransientInstanceResolution;
    }());

    var JSONDataEvaluator = /** @class */ (function () {
        function JSONDataEvaluator() {
            this.namespaceDataMap = new Map();
        }
        JSONDataEvaluator.prototype.eval = function (context, expression) {
            var colonIndex = expression.indexOf(':');
            if (colonIndex === -1) {
                throw new Error('Incorrect expression, namespace not specified');
            }
            var namespace = expression.substring(0, colonIndex);
            var exp = expression.substring(colonIndex + 1);
            if (!this.namespaceDataMap.has(namespace)) {
                throw new Error("Incorrect expression: namespace not recorded: \"".concat(namespace, "\""));
            }
            var data = this.namespaceDataMap.get(namespace);
            return runExpression(exp, data);
        };
        JSONDataEvaluator.prototype.recordData = function (namespace, data) {
            this.namespaceDataMap.set(namespace, data);
        };
        return JSONDataEvaluator;
    }());
    function runExpression(expression, rootContext) {
        var fn = compileExpression(expression);
        return fn(rootContext);
    }
    function compileExpression(expression) {
        if (expression.indexOf(',') > -1) {
            throw new Error("Incorrect expression syntax, The ',' is not allowed in expression: \"".concat(expression, "\""));
        }
        if (expression.length > 120) {
            throw new Error("Incorrect expression syntax, expression length cannot be greater than 120, but actual: ".concat(expression.length));
        }
        if (/\(.*?\)/.test(expression)) {
            throw new Error("Incorrect expression syntax, parentheses are not allowed in expression: \"".concat(expression, "\""));
        }
        expression = expression.trim();
        if (expression === '') {
            return function (root) { return root; };
        }
        var rootVarName = varName('context');
        return new Function(rootVarName, "\n        \"use strict\";\n        try {\n            return ".concat(rootVarName, ".").concat(expression, ";\n        } catch(error) { throw error }\n    "));
    }
    var VAR_SEQUENCE = Date.now();
    function varName(prefix) {
        return prefix + '' + (VAR_SEQUENCE++).toString(16);
    }

    var EnvironmentEvaluator = /** @class */ (function () {
        function EnvironmentEvaluator() {
        }
        EnvironmentEvaluator.prototype.eval = function (context, expression) {
            return process.env[expression];
        };
        return EnvironmentEvaluator;
    }());

    var ArgvEvaluator = /** @class */ (function () {
        function ArgvEvaluator() {
        }
        ArgvEvaluator.prototype.eval = function (context, expression, args) {
            var argv = args || process.argv;
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            var minimist = require('minimist');
            var map = minimist(argv);
            return map[expression];
        };
        return ArgvEvaluator;
    }());

    exports.Advice = void 0;
    (function (Advice) {
        Advice[Advice["Before"] = 0] = "Before";
        Advice[Advice["After"] = 1] = "After";
        Advice[Advice["Around"] = 2] = "Around";
        Advice[Advice["AfterReturn"] = 3] = "AfterReturn";
        Advice[Advice["Thrown"] = 4] = "Thrown";
        Advice[Advice["Finally"] = 5] = "Finally";
    })(exports.Advice || (exports.Advice = {}));

    /* eslint-disable @typescript-eslint/no-explicit-any */
    var AspectUtils = /** @class */ (function () {
        function AspectUtils(fn) {
            this.fn = fn;
            this.beforeHooks = [];
            this.afterHooks = [];
            this.thrownHooks = [];
            this.finallyHooks = [];
            this.afterReturnHooks = [];
            this.aroundHooks = [];
        }
        AspectUtils.prototype.append = function (advice, hook) {
            var hooksArray;
            switch (advice) {
                case exports.Advice.Before:
                    hooksArray = this.beforeHooks;
                    break;
                case exports.Advice.After:
                    hooksArray = this.afterHooks;
                    break;
                case exports.Advice.Thrown:
                    hooksArray = this.thrownHooks;
                    break;
                case exports.Advice.Finally:
                    hooksArray = this.finallyHooks;
                    break;
                case exports.Advice.AfterReturn:
                    hooksArray = this.afterReturnHooks;
                    break;
                case exports.Advice.Around:
                    hooksArray = this.aroundHooks;
                    break;
            }
            if (hooksArray) {
                hooksArray.push(hook);
            }
        };
        AspectUtils.prototype.extract = function () {
            var _a = this, aroundHooks = _a.aroundHooks, beforeHooks = _a.beforeHooks, afterHooks = _a.afterHooks, afterReturnHooks = _a.afterReturnHooks, finallyHooks = _a.finallyHooks, thrownHooks = _a.thrownHooks;
            var fn = aroundHooks.reduceRight(function (prev, next) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return next.call(this, prev, args);
                };
            }, this.fn);
            return function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                beforeHooks.forEach(function (hook) {
                    hook.call(_this, args);
                });
                var invoke = function (onError, onFinally, onAfter) {
                    var returnValue;
                    var isPromise = false;
                    try {
                        returnValue = fn.apply(_this, args);
                        if (returnValue instanceof Promise) {
                            isPromise = true;
                            returnValue = returnValue.catch(onError).finally(onFinally);
                        }
                    }
                    catch (error) {
                        onError(error);
                    }
                    finally {
                        if (!isPromise) {
                            onFinally();
                        }
                    }
                    if (isPromise) {
                        return returnValue.then(function (value) {
                            return onAfter(value);
                        });
                    }
                    else {
                        return onAfter(returnValue);
                    }
                };
                return invoke(function (error) {
                    if (thrownHooks.length > 0) {
                        thrownHooks.forEach(function (hook) { return hook.call(_this, error, args); });
                    }
                    else {
                        throw error;
                    }
                }, function () {
                    finallyHooks.forEach(function (hook) { return hook.call(_this, args); });
                }, function (value) {
                    afterHooks.forEach(function (hook) {
                        hook.call(_this, args);
                    });
                    return afterReturnHooks.reduce(function (retVal, hook) {
                        return hook.call(_this, retVal, args);
                    }, value);
                });
            };
        };
        return AspectUtils;
    }());

    function createAspect(appCtx, target, methodName, methodFunc, metadata) {
        var createAspectCtx = function (advice, args, returnValue, error) {
            if (returnValue === void 0) { returnValue = null; }
            if (error === void 0) { error = null; }
            return {
                target: target,
                methodName: methodName,
                arguments: args,
                returnValue: returnValue,
                error: error,
                advice: advice
            };
        };
        var aspectUtils = new AspectUtils(methodFunc);
        var ClassToInstance = function (AspectClass) { return appCtx.getInstance(AspectClass); };
        var beforeAdviceAspects = metadata.getAspectsOf(methodName, exports.Advice.Before).map(ClassToInstance);
        var afterAdviceAspects = metadata.getAspectsOf(methodName, exports.Advice.After).map(ClassToInstance);
        var tryCatchAdviceAspects = metadata.getAspectsOf(methodName, exports.Advice.Thrown).map(ClassToInstance);
        var tryFinallyAdviceAspects = metadata.getAspectsOf(methodName, exports.Advice.Finally).map(ClassToInstance);
        var afterReturnAdviceAspects = metadata.getAspectsOf(methodName, exports.Advice.AfterReturn).map(ClassToInstance);
        var aroundAdviceAspects = metadata.getAspectsOf(methodName, exports.Advice.Around).map(ClassToInstance);
        if (beforeAdviceAspects.length > 0) {
            aspectUtils.append(exports.Advice.Before, function (args) {
                var joinPoint = createAspectCtx(exports.Advice.Before, args);
                beforeAdviceAspects.forEach(function (aspect) {
                    aspect.execute(joinPoint);
                });
            });
        }
        if (afterAdviceAspects.length > 0) {
            aspectUtils.append(exports.Advice.After, function (args) {
                var joinPoint = createAspectCtx(exports.Advice.After, args);
                afterAdviceAspects.forEach(function (aspect) {
                    aspect.execute(joinPoint);
                });
            });
        }
        if (tryCatchAdviceAspects.length > 0) {
            aspectUtils.append(exports.Advice.Thrown, function (error, args) {
                var joinPoint = createAspectCtx(exports.Advice.Thrown, args, null, error);
                tryCatchAdviceAspects.forEach(function (aspect) {
                    aspect.execute(joinPoint);
                });
            });
        }
        if (tryFinallyAdviceAspects.length > 0) {
            aspectUtils.append(exports.Advice.Finally, function (args) {
                var joinPoint = createAspectCtx(exports.Advice.Finally, args);
                tryFinallyAdviceAspects.forEach(function (aspect) {
                    aspect.execute(joinPoint);
                });
            });
        }
        if (afterReturnAdviceAspects.length > 0) {
            aspectUtils.append(exports.Advice.AfterReturn, function (returnValue, args) {
                return afterReturnAdviceAspects.reduce(function (prevReturnValue, aspect) {
                    var joinPoint = createAspectCtx(exports.Advice.AfterReturn, args, returnValue);
                    return aspect.execute(joinPoint);
                }, returnValue);
            });
        }
        if (aroundAdviceAspects.length > 0) {
            aroundAdviceAspects.forEach(function (aspect) {
                aspectUtils.append(exports.Advice.Around, function (originFn, args) {
                    var joinPoint = createAspectCtx(exports.Advice.Around, args, null);
                    joinPoint.proceed = function (jpArgs) {
                        if (jpArgs === void 0) { jpArgs = args; }
                        return originFn(jpArgs);
                    };
                    return aspect.execute(joinPoint);
                });
            });
        }
        return aspectUtils.extract();
    }

    var AOPClassMetadata = /** @class */ (function () {
        function AOPClassMetadata() {
            this.aspectMap = createDefaultValueMap(function () { return createDefaultValueMap(function () { return []; }); });
        }
        AOPClassMetadata.getReflectKey = function () {
            return 'aop:use-aspect-metadata';
        };
        AOPClassMetadata.prototype.init = function () {
            // IGNORE
        };
        AOPClassMetadata.prototype.append = function (methodName, advice, aspects) {
            var adviceAspectMap = this.aspectMap.get(methodName);
            var exitingAspectArray = adviceAspectMap.get(advice);
            exitingAspectArray.push.apply(exitingAspectArray, __spreadArray([], __read(aspects), false));
        };
        AOPClassMetadata.prototype.reader = function () {
            var _this = this;
            return {
                getAspects: function () {
                    return _this.aspectMap;
                },
                getAspectsOf: function (methodName, advice) {
                    return _this.aspectMap.get(methodName).get(advice);
                }
            };
        };
        return AOPClassMetadata;
    }());

    var AOPInstantiationAwareProcessor = /** @class */ (function () {
        function AOPInstantiationAwareProcessor() {
        }
        AOPInstantiationAwareProcessor.create = function (appCtx) {
            return /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.appCtx = appCtx;
                    return _this;
                }
                return class_1;
            }(AOPInstantiationAwareProcessor));
        };
        AOPInstantiationAwareProcessor.prototype.afterInstantiation = function (instance) {
            var _this = this;
            var clazz = instance.constructor;
            var useAspectMetadata = MetadataInstanceManager.getMetadata(clazz, AOPClassMetadata);
            var useAspectMetadataReader = useAspectMetadata.reader();
            var useAspectsMap = useAspectMetadataReader.getAspects();
            if (useAspectsMap.size === 0) {
                return instance;
            }
            var aspectStoreMap = new WeakMap();
            aspectStoreMap.set(instance, new Map());
            var proxyResult = new Proxy(instance, {
                get: function (target, prop) {
                    var originValue = target[prop];
                    if (prop in target && typeof originValue === 'function') {
                        var aspectMap = aspectStoreMap.get(instance);
                        if (!aspectMap) {
                            return originValue;
                        }
                        if (aspectMap.has(prop)) {
                            return aspectMap.get(prop);
                        }
                        var aspectFn = createAspect(_this.appCtx, target, prop, originValue, useAspectMetadataReader);
                        aspectMap.set(prop, aspectFn);
                        return aspectFn;
                    }
                    return originValue;
                }
            });
            return proxyResult;
        };
        return AOPInstantiationAwareProcessor;
    }());

    var InstantiationAwareProcessorManager = /** @class */ (function () {
        function InstantiationAwareProcessorManager(container) {
            this.container = container;
            this.instAwareProcessorClasses = new Set();
        }
        InstantiationAwareProcessorManager.prototype.appendInstAwareProcessorClass = function (instAwareProcessorClass) {
            this.instAwareProcessorClasses.add(instAwareProcessorClass);
        };
        InstantiationAwareProcessorManager.prototype.appendInstAwareProcessorClasses = function (instAwareProcessorClasses) {
            var _this = this;
            instAwareProcessorClasses.forEach(function (it) {
                _this.instAwareProcessorClasses.add(it);
            });
        };
        InstantiationAwareProcessorManager.prototype.beforeInstantiation = function (componentClass, args) {
            var instAwareProcessors = this.instAwareProcessorInstances;
            var instance;
            instAwareProcessors.some(function (processor) {
                if (!processor.beforeInstantiation) {
                    return false;
                }
                instance = processor.beforeInstantiation(componentClass, args);
                return !!instance;
            });
            return instance;
        };
        InstantiationAwareProcessorManager.prototype.afterInstantiation = function (instance) {
            return this.instAwareProcessorInstances.reduce(function (instance, processor) {
                if (processor.afterInstantiation) {
                    var result = processor.afterInstantiation(instance);
                    if (!!result) {
                        return result;
                    }
                }
                return instance;
            }, instance);
        };
        InstantiationAwareProcessorManager.prototype.isInstAwareProcessorClass = function (cls) {
            var classes = this.getInstAwareProcessorClasses();
            return classes.indexOf(cls) > -1;
        };
        InstantiationAwareProcessorManager.prototype.getInstAwareProcessorClasses = function () {
            var globalInstAwareProcessorClasses = GlobalMetadata.getInstance().reader().getInstAwareProcessorClasses();
            return globalInstAwareProcessorClasses.concat(Array.from(this.instAwareProcessorClasses));
        };
        __decorate([
            lazyMember({
                evaluate: function (instance) {
                    var globalInstAwareProcessorClasses = GlobalMetadata.getInstance().reader().getInstAwareProcessorClasses();
                    var instAwareProcessorClasses = globalInstAwareProcessorClasses.concat(Array.from(instance.instAwareProcessorClasses));
                    return instAwareProcessorClasses.map(function (it) { return instance.container.getInstance(it); });
                },
                resetBy: [
                    function (instance) { return instance.instAwareProcessorClasses.size; },
                    function () {
                        var globalInstAwareProcessorClasses = GlobalMetadata.getInstance().reader().getInstAwareProcessorClasses();
                        return globalInstAwareProcessorClasses.length;
                    }
                ]
            }),
            __metadata("design:type", Array)
        ], InstantiationAwareProcessorManager.prototype, "instAwareProcessorInstances", void 0);
        return InstantiationAwareProcessorManager;
    }());

    var PRE_DESTROY_EVENT_KEY = 'container:event:pre-destroy';
    var ApplicationContext = /** @class */ (function () {
        function ApplicationContext(options) {
            if (options === void 0) { options = {}; }
            this.resolutions = new Map();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.factories = new Map();
            this.evaluatorClasses = new Map();
            this.eventEmitter = new EventEmitter();
            this.defaultScope = options.defaultScope || exports.InstanceScope.SINGLETON;
            this.lazyMode = options.lazyMode === undefined ? true : options.lazyMode;
            this.registerInstanceScopeResolution(exports.InstanceScope.SINGLETON, SingletonInstanceResolution);
            this.registerInstanceScopeResolution(exports.InstanceScope.GLOBAL_SHARED_SINGLETON, GlobalSharedInstanceResolution);
            this.registerInstanceScopeResolution(exports.InstanceScope.TRANSIENT, TransientInstanceResolution);
            this.registerEvaluator(exports.ExpressionType.JSON_PATH, JSONDataEvaluator);
            if (isNodeJs) {
                this.registerEvaluator(exports.ExpressionType.ENV, EnvironmentEvaluator);
                this.registerEvaluator(exports.ExpressionType.ARGV, ArgvEvaluator);
            }
            this.instAwareProcessorManager = new InstantiationAwareProcessorManager(this);
            this.registerInstAwareProcessor(AOPInstantiationAwareProcessor.create(this));
        }
        ApplicationContext.prototype.getInstance = function (symbol, owner) {
            if (symbol === ApplicationContext) {
                return this;
            }
            if (typeof symbol === 'string' || typeof symbol === 'symbol') {
                var factoryDef = this.getFactory(symbol);
                if (factoryDef) {
                    var factory = factoryDef.factory, injections = factoryDef.injections;
                    var fn = factory(this, owner);
                    var result = this.invoke(fn, {
                        injections: injections
                    });
                    var constr = result === null || result === void 0 ? void 0 : result.constructor;
                    if (typeof constr === 'function') {
                        var componentClass_1 = constr;
                        var resolver = new LifecycleManager(componentClass_1, this);
                        var isInstAwareProcessor = this.instAwareProcessorManager.isInstAwareProcessorClass(componentClass_1);
                        resolver.invokePreInjectMethod(result);
                        if (!isInstAwareProcessor) {
                            result = this.instAwareProcessorManager.afterInstantiation(result);
                        }
                        resolver.invokePostInjectMethod(result);
                    }
                    return result;
                }
                else {
                    var classMetadata = GlobalMetadata.getInstance().reader().getClassMetadata(symbol);
                    if (!classMetadata) {
                        throw new Error('');
                    }
                    else {
                        symbol = classMetadata.reader().getClass();
                    }
                }
            }
            var componentClass = symbol;
            var reader = ClassMetadata.getInstance(componentClass).reader();
            var scope = reader.getScope();
            var resolution = (this.resolutions.get(scope) || this.resolutions.get(this.defaultScope));
            var getInstanceOptions = {
                identifier: componentClass,
                owner: owner,
                ownerPropertyKey: undefined
            };
            if (resolution.shouldGenerate(getInstanceOptions)) {
                var builder = this.createComponentInstanceBuilder(componentClass);
                var instance = builder.build();
                var saveInstanceOptions = __assign(__assign({}, getInstanceOptions), { instance: instance });
                resolution.saveInstance(saveInstanceOptions);
                return instance;
            }
            else {
                return resolution.getInstance(getInstanceOptions);
            }
        };
        ApplicationContext.prototype.createComponentInstanceBuilder = function (componentClass) {
            var builder = new ComponentInstanceBuilder(componentClass, this, this.instAwareProcessorManager);
            builder.appendLazyMode(this.lazyMode);
            return builder;
        };
        ApplicationContext.prototype.getFactory = function (key) {
            var factory = GlobalMetadata.getInstance().reader().getComponentFactory(key);
            if (!factory) {
                return this.factories.get(key);
            }
            return factory;
        };
        ApplicationContext.prototype.bindFactory = function (symbol, factory, injections) {
            this.factories.set(symbol, new ServiceFactoryDef(factory, injections));
        };
        ApplicationContext.prototype.invoke = function (func, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var fn;
            if (arguments.length > 1) {
                fn = func.bind(options.context);
            }
            else {
                fn = func;
            }
            if (hasArgs(options)) {
                return options.args ? fn.apply(void 0, __spreadArray([], __read(options.args), false)) : fn();
            }
            if (hasInjections(options)) {
                var args_1 = options.injections ? options.injections.map(function (it) { return _this.getInstance(it); }) : [];
                return args_1.length > 0 ? fn.apply(void 0, __spreadArray([], __read(args_1), false)) : fn();
            }
            var metadata = MetadataInstanceManager.getMetadata(fn, FunctionMetadata).reader();
            var parameterIdentifiers = metadata.getParameters();
            var args = parameterIdentifiers.map(function (identifier) {
                return _this.getInstance(identifier);
            });
            return fn.apply(void 0, __spreadArray([], __read(args), false));
        };
        ApplicationContext.prototype.destroy = function () {
            this.eventEmitter.emit(PRE_DESTROY_EVENT_KEY);
            this.resolutions.forEach(function (it) {
                it.destroy();
            });
        };
        ApplicationContext.prototype.evaluate = function (expression, options) {
            var evaluatorClass = this.evaluatorClasses.get(options.type);
            if (!evaluatorClass) {
                throw new TypeError("Unknown evaluator name: ".concat(options.type));
            }
            var evaluator = this.getInstance(evaluatorClass);
            return evaluator.eval(this, expression, options.externalArgs);
        };
        ApplicationContext.prototype.recordJSONData = function (namespace, data) {
            var evaluator = this.getInstance(JSONDataEvaluator);
            evaluator.recordData(namespace, data);
        };
        ApplicationContext.prototype.bindInstance = function (identifier, instance) {
            var resolution = this.resolutions.get(exports.InstanceScope.SINGLETON);
            resolution === null || resolution === void 0 ? void 0 : resolution.saveInstance({
                identifier: identifier,
                instance: instance
            });
        };
        ApplicationContext.prototype.registerInstanceScopeResolution = function (scope, resolutionConstructor, constructorArgs) {
            this.resolutions.set(scope, new (resolutionConstructor.bind.apply(resolutionConstructor, __spreadArray([void 0], __read((constructorArgs || [])), false)))());
        };
        ApplicationContext.prototype.registerEvaluator = function (name, evaluatorClass) {
            var metadata = MetadataInstanceManager.getMetadata(evaluatorClass, ClassMetadata);
            metadata.setScope(exports.InstanceScope.SINGLETON);
            this.evaluatorClasses.set(name, evaluatorClass);
        };
        ApplicationContext.prototype.registerInstAwareProcessor = function (clazz) {
            this.instAwareProcessorManager.appendInstAwareProcessorClass(clazz);
        };
        ApplicationContext.prototype.onPreDestroy = function (listener) {
            return this.eventEmitter.on(PRE_DESTROY_EVENT_KEY, listener);
        };
        ApplicationContext.prototype.getClassMetadata = function (ctor) {
            return ClassMetadata.getInstance(ctor).reader();
        };
        return ApplicationContext;
    }());

    var ComponentMethodAspect = /** @class */ (function () {
        function ComponentMethodAspect() {
        }
        ComponentMethodAspect.create = function (clazz, methodName) {
            return /** @class */ (function (_super) {
                __extends(ComponentMethodAspectImpl, _super);
                function ComponentMethodAspectImpl() {
                    var _this = _super.call(this) || this;
                    lazyProp(_this, 'aspectInstance', {
                        evaluate: function () { return _this.appCtx.getInstance(clazz); }
                    });
                    return _this;
                }
                ComponentMethodAspectImpl.prototype.execute = function (ctx) {
                    var func = this.aspectInstance[methodName];
                    return func.call(this.aspectInstance, ctx);
                };
                return ComponentMethodAspectImpl;
            }(ComponentMethodAspect));
        };
        __decorate([
            Inject(ApplicationContext),
            __metadata("design:type", ApplicationContext)
        ], ComponentMethodAspect.prototype, "appCtx", void 0);
        return ComponentMethodAspect;
    }());

    function getMethodDescriptors(prototype) {
        if (typeof prototype !== 'object' ||
            prototype === null ||
            Object.prototype === prototype ||
            Function.prototype === prototype) {
            return {};
        }
        var superPrototype = Object.getPrototypeOf(prototype);
        var superDescriptors = superPrototype === prototype ? {} : getMethodDescriptors(superPrototype);
        return Object.assign(superDescriptors, Object.getOwnPropertyDescriptors(prototype));
    }
    function getAllMethodMemberNames(cls) {
        var descriptors = getMethodDescriptors(cls.prototype);
        delete descriptors['constructor'];
        var methodNames = new Set();
        for (var key in descriptors) {
            var member = cls.prototype[key];
            if (typeof member === 'function') {
                methodNames.add(key);
            }
        }
        return methodNames;
    }

    var Pointcut = /** @class */ (function () {
        function Pointcut(methodEntries) {
            this.methodEntries = methodEntries;
        }
        Pointcut.combine = function () {
            var ps = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                ps[_i] = arguments[_i];
            }
            return ps.reduce(function (prev, it) {
                return prev.combine(it);
            });
        };
        Pointcut.of = function (cls) {
            var methodNames = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                methodNames[_i - 1] = arguments[_i];
            }
            var entries = new Map();
            var methods = new Set(methodNames);
            if (arguments.length === 1) {
                getAllMethodMemberNames(cls).forEach(function (methodName) {
                    methods.add(methodName);
                });
            }
            entries.set(cls, methods);
            return new Pointcut(entries);
        };
        Pointcut.testMatch = function (cls, regex) {
            var methodNames = getAllMethodMemberNames(cls);
            var matchMethodNames = Array.from(methodNames).filter(function (it) {
                return regex.test(it);
            });
            return Pointcut.of.apply(Pointcut, __spreadArray([cls], __read(matchMethodNames), false));
        };
        Pointcut.from = function () {
            var classes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                classes[_i] = arguments[_i];
            }
            var of = function () {
                var methodNames = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    methodNames[_i] = arguments[_i];
                }
                return Pointcut.combine.apply(Pointcut, __spreadArray([], __read(classes.map(function (cls) { return Pointcut.of.apply(Pointcut, __spreadArray([cls], __read(methodNames), false)); })), false));
            };
            var testMatch = function (regex) {
                return Pointcut.combine.apply(Pointcut, __spreadArray([], __read(classes.map(function (cls) {
                    return Pointcut.testMatch(cls, regex);
                })), false));
            };
            return {
                of: of,
                testMatch: testMatch
            };
        };
        Pointcut.prototype.combine = function (other) {
            var map = new Map(this.methodEntries);
            var otherMap = other.methodEntries;
            otherMap.forEach(function (value, key) {
                var set = map.get(key);
                if (!!set) {
                    value.forEach(function (item) {
                        set.add(item);
                    });
                }
                else {
                    map.set(key, value);
                }
            });
            return new Pointcut(map);
        };
        Pointcut.prototype.getMethodsMap = function () {
            return new Map(this.methodEntries);
        };
        return Pointcut;
    }());

    function addAspect(componentAspectClass, methodName, advice, pointcut) {
        var AspectClass = ComponentMethodAspect.create(componentAspectClass, methodName);
        pointcut.getMethodsMap().forEach(function (jpMembers, jpClass) {
            var metadata = MetadataInstanceManager.getMetadata(jpClass, AOPClassMetadata);
            jpMembers.forEach(function (methodName) {
                metadata.append(methodName, advice, [AspectClass]);
            });
        });
    }

    function After(pointcut) {
        return function (target, propertyKey) {
            addAspect(target.constructor, propertyKey, exports.Advice.After, pointcut);
        };
    }

    function AfterReturn(pointcut) {
        return function (target, propertyKey) {
            addAspect(target.constructor, propertyKey, exports.Advice.AfterReturn, pointcut);
        };
    }

    function Around(pointcut) {
        return function (target, propertyKey) {
            addAspect(target.constructor, propertyKey, exports.Advice.Around, pointcut);
        };
    }

    function Before(pointcut) {
        return function (target, propertyKey) {
            addAspect(target.constructor, propertyKey, exports.Advice.Before, pointcut);
        };
    }

    function Finally(pointcut) {
        return function (target, propertyKey) {
            addAspect(target.constructor, propertyKey, exports.Advice.Finally, pointcut);
        };
    }

    function Thrown(pointcut) {
        return function (target, propertyKey) {
            addAspect(target.constructor, propertyKey, exports.Advice.Thrown, pointcut);
        };
    }

    function UseAspects(advice, aspects) {
        return function (target, propertyKey) {
            var clazz = target.constructor;
            var metadata = MetadataInstanceManager.getMetadata(clazz, AOPClassMetadata);
            metadata.append(propertyKey, advice, aspects);
        };
    }

    exports.AOPClassMetadata = AOPClassMetadata;
    exports.After = After;
    exports.AfterReturn = AfterReturn;
    exports.ApplicationContext = ApplicationContext;
    exports.Argv = Argv;
    exports.Around = Around;
    exports.Before = Before;
    exports.Bind = Bind;
    exports.ClassMetadata = ClassMetadata;
    exports.ComponentMethodAspect = ComponentMethodAspect;
    exports.Env = Env;
    exports.FUNCTION_METADATA_KEY = FUNCTION_METADATA_KEY;
    exports.Factory = Factory;
    exports.Finally = Finally;
    exports.FunctionMetadata = FunctionMetadata;
    exports.GlobalMetadata = GlobalMetadata;
    exports.Inject = Inject;
    exports.InstAwareProcessor = InstAwareProcessor;
    exports.JSONData = JSONData;
    exports.LifecycleDecorator = LifecycleDecorator;
    exports.Mark = Mark;
    exports.MarkInfoContainer = MarkInfoContainer;
    exports.ParameterMarkInfoContainer = ParameterMarkInfoContainer;
    exports.Pointcut = Pointcut;
    exports.PostInject = PostInject;
    exports.PreDestroy = PreDestroy;
    exports.PreInject = PreInject;
    exports.Scope = Scope;
    exports.Thrown = Thrown;
    exports.UseAspects = UseAspects;
    exports.Value = Value;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvZm91bmRhdGlvbi9JbnN0YW5jZVNjb3BlLnRzIiwiLi4vc3JjL2NvbW1vbi9EZWZhdWx0VmFsdWVNYXAudHMiLCIuLi9ub2RlX21vZHVsZXMvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzIiwiLi4vc3JjL21ldGFkYXRhL01ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyLnRzIiwiLi4vc3JjL21ldGFkYXRhL0NsYXNzTWV0YWRhdGEudHMiLCIuLi9zcmMvZm91bmRhdGlvbi9TZXJ2aWNlRmFjdG9yeURlZi50cyIsIi4uL3NyYy9tZXRhZGF0YS9HbG9iYWxNZXRhZGF0YS50cyIsIi4uL3NyYy90eXBlcy9FdmFsdWF0ZU9wdGlvbnMudHMiLCIuLi9zcmMvY29tbW9uL2lzTm9kZUpzLnRzIiwiLi4vc3JjL2RlY29yYXRvcnMvVmFsdWUudHMiLCIuLi9zcmMvZGVjb3JhdG9ycy9Bcmd2LnRzIiwiLi4vc3JjL2RlY29yYXRvcnMvQmluZC50cyIsIi4uL3NyYy9kZWNvcmF0b3JzL0Vudi50cyIsIi4uL3NyYy9jb21tb24vaXNOb3REZWZpbmVkLnRzIiwiLi4vc3JjL2RlY29yYXRvcnMvRmFjdG9yeS50cyIsIi4uL3NyYy9kZWNvcmF0b3JzL0luamVjdC50cyIsIi4uL3NyYy9kZWNvcmF0b3JzL0luc3RBd2FyZVByb2Nlc3Nvci50cyIsIi4uL3NyYy9kZWNvcmF0b3JzL0pTT05EYXRhLnRzIiwiLi4vc3JjL2RlY29yYXRvcnMvTGlmZWN5Y2xlRGVjb3JhdG9yLnRzIiwiLi4vc3JjL2RlY29yYXRvcnMvTWFyay50cyIsIi4uL3NyYy9mb3VuZGF0aW9uL0xpZmVjeWNsZS50cyIsIi4uL3NyYy9kZWNvcmF0b3JzL1Bvc3RJbmplY3QudHMiLCIuLi9zcmMvZGVjb3JhdG9ycy9QcmVEZXN0cm95LnRzIiwiLi4vc3JjL2RlY29yYXRvcnMvUHJlSW5qZWN0LnRzIiwiLi4vc3JjL2RlY29yYXRvcnMvU2NvcGUudHMiLCIuLi9zcmMvZm91bmRhdGlvbi9FdmVudEVtaXR0ZXIudHMiLCIuLi9zcmMvZm91bmRhdGlvbi9JbnZva2VGdW5jdGlvbk9wdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHZnZXJib3QvbGF6eS9kaXN0L2luZGV4LmNqcy5qcyIsIi4uL3NyYy9mb3VuZGF0aW9uL0xpZmVjeWNsZU1hbmFnZXIudHMiLCIuLi9zcmMvZm91bmRhdGlvbi9Db21wb25lbnRJbnN0YW5jZUJ1aWxkZXIudHMiLCIuLi9zcmMvbWV0YWRhdGEvRnVuY3Rpb25NZXRhZGF0YS50cyIsIi4uL3NyYy9mb3VuZGF0aW9uL0NvbXBvbmVudEluc3RhbmNlV3JhcHBlci50cyIsIi4uL3NyYy9jb21tb24vaW52b2tlUHJlRGVzdHJveS50cyIsIi4uL3NyYy9yZXNvbHV0aW9uL1NpbmdsZXRvbkluc3RhbmNlUmVzb2x1dGlvbi50cyIsIi4uL3NyYy9yZXNvbHV0aW9uL0dsb2JhbFNoYXJlZEluc3RhbmNlUmVzb2x1dGlvbi50cyIsIi4uL3NyYy9yZXNvbHV0aW9uL1RyYW5zaWVudEluc3RhbmNlUmVzb2x1dGlvbi50cyIsIi4uL3NyYy9ldmFsdWF0b3IvSlNPTkRhdGFFdmFsdWF0b3IudHMiLCIuLi9zcmMvZXZhbHVhdG9yL0Vudmlyb25tZW50RXZhbHVhdG9yLnRzIiwiLi4vc3JjL2V2YWx1YXRvci9Bcmd2RXZhbHVhdG9yLnRzIiwiLi4vc3JjL2FvcC9BZHZpY2UudHMiLCIuLi9zcmMvYW9wL0FzcGVjdFV0aWxzLnRzIiwiLi4vc3JjL2FvcC9jcmVhdGVBc3BlY3QudHMiLCIuLi9zcmMvYW9wL0FPUENsYXNzTWV0YWRhdGEudHMiLCIuLi9zcmMvYW9wL0FPUEluc3RhbnRpYXRpb25Bd2FyZVByb2Nlc3Nvci50cyIsIi4uL3NyYy9mb3VuZGF0aW9uL0luc3RhbnRpYXRpb25Bd2FyZVByb2Nlc3Nvck1hbmFnZXIudHMiLCIuLi9zcmMvZm91bmRhdGlvbi9BcHBsaWNhdGlvbkNvbnRleHQudHMiLCIuLi9zcmMvYW9wL0NvbXBvbmVudE1ldGhvZEFzcGVjdC50cyIsIi4uL3NyYy9jb21tb24vZ2V0QWxsTWV0aG9kTWVtYmVyTmFtZXMudHMiLCIuLi9zcmMvYW9wL1BvaW50Y3V0LnRzIiwiLi4vc3JjL2FvcC9hZGRBc3BlY3QudHMiLCIuLi9zcmMvYW9wL2RlY29yYXRvcnMvQWZ0ZXIudHMiLCIuLi9zcmMvYW9wL2RlY29yYXRvcnMvQWZ0ZXJSZXR1cm4udHMiLCIuLi9zcmMvYW9wL2RlY29yYXRvcnMvQXJvdW5kLnRzIiwiLi4vc3JjL2FvcC9kZWNvcmF0b3JzL0JlZm9yZS50cyIsIi4uL3NyYy9hb3AvZGVjb3JhdG9ycy9GaW5hbGx5LnRzIiwiLi4vc3JjL2FvcC9kZWNvcmF0b3JzL1Rocm93bi50cyIsIi4uL3NyYy9hb3AvZGVjb3JhdG9ycy9Vc2VBc3BlY3RzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEluc3RhbmNlU2NvcGUge1xuICAgIFNJTkdMRVRPTiA9ICdpb2MtcmVzb2x1dGlvbjpjb250YWluZXItc2luZ2xldG9uJyxcbiAgICBUUkFOU0lFTlQgPSAnaW9jLXJlc29sdXRpb246dHJhbnNpZW50JyxcbiAgICBHTE9CQUxfU0hBUkVEX1NJTkdMRVRPTiA9ICdpb2MtcmVzb2x1dGlvbjpnbG9iYWwtc2hhcmVkLXNpbmdsZXRvbidcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0VmFsdWVNYXA8SywgVj4oZmFjdG9yeTogKGtleTogSykgPT4gVikge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXA8SywgVj4oKTtcbiAgICBjb25zdCBvcmlnaW5HZXQgPSBtYXAuZ2V0LmJpbmQobWFwKTtcbiAgICBtYXAuZ2V0ID0gZnVuY3Rpb24gKGtleTogSykge1xuICAgICAgICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luR2V0KGtleSkgYXMgVjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGZhY3Rvcnkoa2V5KTtcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG1hcC5nZXQoa2V5KSBhcyBWO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbWFwIGFzIERlZmF1bHRWYWx1ZU1hcDxLLCBWPjtcbn1cbmV4cG9ydCB0eXBlIERlZmF1bHRWYWx1ZU1hcDxLLCBWPiA9IE9taXQ8TWFwPEssIFY+LCAnZ2V0Jz4gJiB7XG4gICAgZ2V0OiAoa2V5OiBLKSA9PiBWO1xufTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChDKSBNaWNyb3NvZnQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cblxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xudmFyIFJlZmxlY3Q7XG4oZnVuY3Rpb24gKFJlZmxlY3QpIHtcbiAgICAvLyBNZXRhZGF0YSBQcm9wb3NhbFxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvXG4gICAgKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgICAgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gICAgICAgICAgICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOlxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzID09PSBcIm9iamVjdFwiID8gdGhpcyA6XG4gICAgICAgICAgICAgICAgICAgIEZ1bmN0aW9uKFwicmV0dXJuIHRoaXM7XCIpKCk7XG4gICAgICAgIHZhciBleHBvcnRlciA9IG1ha2VFeHBvcnRlcihSZWZsZWN0KTtcbiAgICAgICAgaWYgKHR5cGVvZiByb290LlJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJvb3QuUmVmbGVjdCA9IFJlZmxlY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBleHBvcnRlciA9IG1ha2VFeHBvcnRlcihyb290LlJlZmxlY3QsIGV4cG9ydGVyKTtcbiAgICAgICAgfVxuICAgICAgICBmYWN0b3J5KGV4cG9ydGVyKTtcbiAgICAgICAgZnVuY3Rpb24gbWFrZUV4cG9ydGVyKHRhcmdldCwgcHJldmlvdXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHsgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXMpXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pKGZ1bmN0aW9uIChleHBvcnRlcikge1xuICAgICAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgLy8gZmVhdHVyZSB0ZXN0IGZvciBTeW1ib2wgc3VwcG9ydFxuICAgICAgICB2YXIgc3VwcG9ydHNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIHZhciB0b1ByaW1pdGl2ZVN5bWJvbCA9IHN1cHBvcnRzU3ltYm9sICYmIHR5cGVvZiBTeW1ib2wudG9QcmltaXRpdmUgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wudG9QcmltaXRpdmUgOiBcIkBAdG9QcmltaXRpdmVcIjtcbiAgICAgICAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gc3VwcG9ydHNTeW1ib2wgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbC5pdGVyYXRvciA6IFwiQEBpdGVyYXRvclwiO1xuICAgICAgICB2YXIgc3VwcG9ydHNDcmVhdGUgPSB0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiOyAvLyBmZWF0dXJlIHRlc3QgZm9yIE9iamVjdC5jcmVhdGUgc3VwcG9ydFxuICAgICAgICB2YXIgc3VwcG9ydHNQcm90byA9IHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXk7IC8vIGZlYXR1cmUgdGVzdCBmb3IgX19wcm90b19fIHN1cHBvcnRcbiAgICAgICAgdmFyIGRvd25MZXZlbCA9ICFzdXBwb3J0c0NyZWF0ZSAmJiAhc3VwcG9ydHNQcm90bztcbiAgICAgICAgdmFyIEhhc2hNYXAgPSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gb2JqZWN0IGluIGRpY3Rpb25hcnkgbW9kZSAoYS5rLmEuIFwic2xvd1wiIG1vZGUgaW4gdjgpXG4gICAgICAgICAgICBjcmVhdGU6IHN1cHBvcnRzQ3JlYXRlXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeShPYmplY3QuY3JlYXRlKG51bGwpKTsgfVxuICAgICAgICAgICAgICAgIDogc3VwcG9ydHNQcm90b1xuICAgICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KHsgX19wcm90b19fOiBudWxsIH0pOyB9XG4gICAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoe30pOyB9LFxuICAgICAgICAgICAgaGFzOiBkb3duTGV2ZWxcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gaGFzT3duLmNhbGwobWFwLCBrZXkpOyB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGtleSBpbiBtYXA7IH0sXG4gICAgICAgICAgICBnZXQ6IGRvd25MZXZlbFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBoYXNPd24uY2FsbChtYXAsIGtleSkgPyBtYXBba2V5XSA6IHVuZGVmaW5lZDsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBtYXBba2V5XTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gTG9hZCBnbG9iYWwgb3Igc2hpbSB2ZXJzaW9ucyBvZiBNYXAsIFNldCwgYW5kIFdlYWtNYXBcbiAgICAgICAgdmFyIGZ1bmN0aW9uUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uKTtcbiAgICAgICAgdmFyIHVzZVBvbHlmaWxsID0gdHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnZbXCJSRUZMRUNUX01FVEFEQVRBX1VTRV9NQVBfUE9MWUZJTExcIl0gPT09IFwidHJ1ZVwiO1xuICAgICAgICB2YXIgX01hcCA9ICF1c2VQb2x5ZmlsbCAmJiB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIE1hcC5wcm90b3R5cGUuZW50cmllcyA9PT0gXCJmdW5jdGlvblwiID8gTWFwIDogQ3JlYXRlTWFwUG9seWZpbGwoKTtcbiAgICAgICAgdmFyIF9TZXQgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIFNldCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTZXQucHJvdG90eXBlLmVudHJpZXMgPT09IFwiZnVuY3Rpb25cIiA/IFNldCA6IENyZWF0ZVNldFBvbHlmaWxsKCk7XG4gICAgICAgIHZhciBfV2Vha01hcCA9ICF1c2VQb2x5ZmlsbCAmJiB0eXBlb2YgV2Vha01hcCA9PT0gXCJmdW5jdGlvblwiID8gV2Vha01hcCA6IENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpO1xuICAgICAgICAvLyBbW01ldGFkYXRhXV0gaW50ZXJuYWwgc2xvdFxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeS1vYmplY3QtaW50ZXJuYWwtbWV0aG9kcy1hbmQtaW50ZXJuYWwtc2xvdHNcbiAgICAgICAgdmFyIE1ldGFkYXRhID0gbmV3IF9XZWFrTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBsaWVzIGEgc2V0IG9mIGRlY29yYXRvcnMgdG8gYSBwcm9wZXJ0eSBvZiBhIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSBkZWNvcmF0b3JzIEFuIGFycmF5IG9mIGRlY29yYXRvcnMuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgdG8gZGVjb3JhdGUuXG4gICAgICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgZm9yIHRoZSB0YXJnZXQga2V5LlxuICAgICAgICAgKiBAcmVtYXJrcyBEZWNvcmF0b3JzIGFyZSBhcHBsaWVkIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIEV4YW1wbGUgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIikpKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcbiAgICAgICAgICogICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIikpKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChhdHRyaWJ1dGVzKSAmJiAhSXNVbmRlZmluZWQoYXR0cmlidXRlcykgJiYgIUlzTnVsbChhdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmIChJc051bGwoYXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVQcm9wZXJ0eShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3Rvcih0YXJnZXQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlQ29uc3RydWN0b3IoZGVjb3JhdG9ycywgdGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImRlY29yYXRlXCIsIGRlY29yYXRlKTtcbiAgICAgICAgLy8gNC4xLjIgUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSlcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jcmVmbGVjdC5tZXRhZGF0YVxuICAgICAgICAvKipcbiAgICAgICAgICogQSBkZWZhdWx0IG1ldGFkYXRhIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgY2FuIGJlIHVzZWQgb24gYSBjbGFzcywgY2xhc3MgbWVtYmVyLCBvciBwYXJhbWV0ZXIuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBUaGUga2V5IGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGVudHJ5LlxuICAgICAgICAgKiBAcmV0dXJucyBBIGRlY29yYXRvciBmdW5jdGlvbi5cbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSWYgYG1ldGFkYXRhS2V5YCBpcyBhbHJlYWR5IGRlZmluZWQgZm9yIHRoZSB0YXJnZXQgYW5kIHRhcmdldCBrZXksIHRoZVxuICAgICAgICAgKiBtZXRhZGF0YVZhbHVlIGZvciB0aGF0IGtleSB3aWxsIGJlIG92ZXJ3cml0dGVuLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvciwgVHlwZVNjcmlwdCBvbmx5KVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlLCBUeXBlU2NyaXB0IG9ubHkpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIHByb3BlcnR5O1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZCgpIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZCgpIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkgJiYgIUlzUHJvcGVydHlLZXkocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwibWV0YWRhdGFcIiwgbWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lIGEgdW5pcXVlIG1ldGFkYXRhIGVudHJ5IG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgQSB2YWx1ZSB0aGF0IGNvbnRhaW5zIGF0dGFjaGVkIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRvIGRlZmluZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGRlY29yYXRvciBmYWN0b3J5IGFzIG1ldGFkYXRhLXByb2R1Y2luZyBhbm5vdGF0aW9uLlxuICAgICAgICAgKiAgICAgZnVuY3Rpb24gTXlBbm5vdGF0aW9uKG9wdGlvbnMpOiBEZWNvcmF0b3Ige1xuICAgICAgICAgKiAgICAgICAgIHJldHVybiAodGFyZ2V0LCBrZXk/KSA9PiBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgdGFyZ2V0LCBrZXkpO1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZGVmaW5lTWV0YWRhdGFcIiwgZGVmaW5lTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluIGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbjsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiaGFzTWV0YWRhdGFcIiwgaGFzTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IG9iamVjdCBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0OyBvdGhlcndpc2UsIGBmYWxzZWAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBoYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJoYXNPd25NZXRhZGF0YVwiLCBoYXNPd25NZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIFRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGtleSBpZiBmb3VuZDsgb3RoZXJ3aXNlLCBgdW5kZWZpbmVkYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE1ldGFkYXRhXCIsIGdldE1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIFRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGtleSBpZiBmb3VuZDsgb3RoZXJ3aXNlLCBgdW5kZWZpbmVkYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE93bk1ldGFkYXRhXCIsIGdldE93bk1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlNZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRNZXRhZGF0YUtleXNcIiwgZ2V0TWV0YWRhdGFLZXlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIHVuaXF1ZSBtZXRhZGF0YSBrZXlzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE93bk1ldGFkYXRhS2V5c1wiLCBnZXRPd25NZXRhZGF0YUtleXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVsZXRlcyB0aGUgbWV0YWRhdGEgZW50cnkgZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBrZXkuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBlbnRyeSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQ7IG90aGVyd2lzZSwgZmFsc2UuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgcHJvcGVydHlLZXksIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIW1ldGFkYXRhTWFwLmRlbGV0ZShtZXRhZGF0YUtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhTWFwLnNpemUgPiAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gTWV0YWRhdGEuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB0YXJnZXRNZXRhZGF0YS5kZWxldGUocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgaWYgKHRhcmdldE1ldGFkYXRhLnNpemUgPiAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgTWV0YWRhdGEuZGVsZXRlKHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImRlbGV0ZU1ldGFkYXRhXCIsIGRlbGV0ZU1ldGFkYXRhKTtcbiAgICAgICAgZnVuY3Rpb24gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSAmJiAhSXNOdWxsKGRlY29yYXRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKGRlY29yYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGRlY29yYXRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIERlY29yYXRlUHJvcGVydHkoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSAmJiAhSXNOdWxsKGRlY29yYXRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChkZWNvcmF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gZGVjb3JhdGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgQ3JlYXRlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQoTyk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQodGFyZ2V0TWV0YWRhdGEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFDcmVhdGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgX01hcCgpO1xuICAgICAgICAgICAgICAgIE1ldGFkYXRhLnNldChPLCB0YXJnZXRNZXRhZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSB0YXJnZXRNZXRhZGF0YS5nZXQoUCk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFDcmVhdGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFNYXAgPSBuZXcgX01hcCgpO1xuICAgICAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhLnNldChQLCBtZXRhZGF0YU1hcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjEuMSBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWhhc21ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBoYXNPd24gPSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgICAgICAgIGlmIChoYXNPd24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmICghSXNOdWxsKHBhcmVudCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjIuMSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWhhc293bm1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBUb0Jvb2xlYW4obWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjMuMSBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWdldG1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBoYXNPd24gPSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgICAgICAgIGlmIChoYXNPd24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAoIUlzTnVsbChwYXJlbnQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNC4xIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5Z2V0b3dubWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YU1hcC5nZXQoTWV0YWRhdGFLZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS41LjEgT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlkZWZpbmVvd25tZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gdHJ1ZSk7XG4gICAgICAgICAgICBtZXRhZGF0YU1hcC5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS42LjEgT3JkaW5hcnlNZXRhZGF0YUtleXMoTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnltZXRhZGF0YWtleXNcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlNZXRhZGF0YUtleXMoTywgUCkge1xuICAgICAgICAgICAgdmFyIG93bktleXMgPSBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gb3duS2V5cztcbiAgICAgICAgICAgIHZhciBwYXJlbnRLZXlzID0gT3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRLZXlzLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xuICAgICAgICAgICAgaWYgKG93bktleXMubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudEtleXM7XG4gICAgICAgICAgICB2YXIgc2V0ID0gbmV3IF9TZXQoKTtcbiAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIG93bktleXNfMSA9IG93bktleXM7IF9pIDwgb3duS2V5c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBvd25LZXlzXzFbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBoYXNLZXkgPSBzZXQuaGFzKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIHBhcmVudEtleXNfMSA9IHBhcmVudEtleXM7IF9hIDwgcGFyZW50S2V5c18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwYXJlbnRLZXlzXzFbX2FdO1xuICAgICAgICAgICAgICAgIHZhciBoYXNLZXkgPSBzZXQuaGFzKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNy4xIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5b3dubWV0YWRhdGFrZXlzXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgICAgIHZhciBrZXlzT2JqID0gbWV0YWRhdGFNYXAua2V5cygpO1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gR2V0SXRlcmF0b3Ioa2V5c09iaik7XG4gICAgICAgICAgICB2YXIgayA9IDA7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5sZW5ndGggPSBrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IEl0ZXJhdG9yVmFsdWUobmV4dCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAga2V5c1trXSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gNiBFQ01BU2NyaXB0IERhdGEgVHlwMGVzIGFuZCBWYWx1ZXNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1kYXRhLXR5cGVzLWFuZC12YWx1ZXNcbiAgICAgICAgZnVuY3Rpb24gVHlwZSh4KSB7XG4gICAgICAgICAgICBpZiAoeCA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAvKiBOdWxsICovO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjogcmV0dXJuIDAgLyogVW5kZWZpbmVkICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6IHJldHVybiAyIC8qIEJvb2xlYW4gKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOiByZXR1cm4gMyAvKiBTdHJpbmcgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcInN5bWJvbFwiOiByZXR1cm4gNCAvKiBTeW1ib2wgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOiByZXR1cm4gNSAvKiBOdW1iZXIgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOiByZXR1cm4geCA9PT0gbnVsbCA/IDEgLyogTnVsbCAqLyA6IDYgLyogT2JqZWN0ICovO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiA2IC8qIE9iamVjdCAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuMSBUaGUgVW5kZWZpbmVkIFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy11bmRlZmluZWQtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc1VuZGVmaW5lZCh4KSB7XG4gICAgICAgICAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS4yIFRoZSBOdWxsIFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1udWxsLXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNOdWxsKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4ID09PSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS41IFRoZSBTeW1ib2wgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLXN5bWJvbC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzU3ltYm9sKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuNyBUaGUgT2JqZWN0IFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNPYmplY3QoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiID8geCAhPT0gbnVsbCA6IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xIFR5cGUgQ29udmVyc2lvblxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlLWNvbnZlcnNpb25cbiAgICAgICAgLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4gICAgICAgIGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKFR5cGUoaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwIC8qIFVuZGVmaW5lZCAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgMSAvKiBOdWxsICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSAyIC8qIEJvb2xlYW4gKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDMgLyogU3RyaW5nICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSA0IC8qIFN5bWJvbCAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgNSAvKiBOdW1iZXIgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoaW50ID0gUHJlZmVycmVkVHlwZSA9PT0gMyAvKiBTdHJpbmcgKi8gPyBcInN0cmluZ1wiIDogUHJlZmVycmVkVHlwZSA9PT0gNSAvKiBOdW1iZXIgKi8gPyBcIm51bWJlclwiIDogXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICB2YXIgZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCB0b1ByaW1pdGl2ZVN5bWJvbCk7XG4gICAgICAgICAgICBpZiAoZXhvdGljVG9QcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXhvdGljVG9QcmltLmNhbGwoaW5wdXQsIGhpbnQpO1xuICAgICAgICAgICAgICAgIGlmIChJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSBcImRlZmF1bHRcIiA/IFwibnVtYmVyXCIgOiBoaW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMS4xIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcbiAgICAgICAgICAgIGlmIChoaW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvU3RyaW5nXzEgPSBPLnRvU3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHRvU3RyaW5nXzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0b1N0cmluZ18xLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZU9mID0gTy52YWx1ZU9mO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHZhbHVlT2YpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZU9mLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlT2YgPSBPLnZhbHVlT2Y7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodmFsdWVPZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlT2YuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRvU3RyaW5nXzIgPSBPLnRvU3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHRvU3RyaW5nXzIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0b1N0cmluZ18yLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4yIFRvQm9vbGVhbihhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLzIwMTYvI3NlYy10b2Jvb2xlYW5cbiAgICAgICAgZnVuY3Rpb24gVG9Cb29sZWFuKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gISFhcmd1bWVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMTIgVG9TdHJpbmcoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvc3RyaW5nXG4gICAgICAgIGZ1bmN0aW9uIFRvU3RyaW5nKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIGFyZ3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4xNCBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG4gICAgICAgIGZ1bmN0aW9uIFRvUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBUb1ByaW1pdGl2ZShhcmd1bWVudCwgMyAvKiBTdHJpbmcgKi8pO1xuICAgICAgICAgICAgaWYgKElzU3ltYm9sKGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIHJldHVybiBUb1N0cmluZyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMiBUZXN0aW5nIGFuZCBDb21wYXJpc29uIE9wZXJhdGlvbnNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdGVzdGluZy1hbmQtY29tcGFyaXNvbi1vcGVyYXRpb25zXG4gICAgICAgIC8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbiAgICAgICAgZnVuY3Rpb24gSXNBcnJheShhcmd1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXlcbiAgICAgICAgICAgICAgICA/IEFycmF5LmlzQXJyYXkoYXJndW1lbnQpXG4gICAgICAgICAgICAgICAgOiBhcmd1bWVudCBpbnN0YW5jZW9mIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICA/IGFyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yLjMgSXNDYWxsYWJsZShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuICAgICAgICBmdW5jdGlvbiBJc0NhbGxhYmxlKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGFuIGFwcHJveGltYXRpb24gYXMgd2UgY2Fubm90IGNoZWNrIGZvciBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yLjQgSXNDb25zdHJ1Y3Rvcihhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNjb25zdHJ1Y3RvclxuICAgICAgICBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGFuIGFwcHJveGltYXRpb24gYXMgd2UgY2Fubm90IGNoZWNrIGZvciBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIuNyBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc3Byb3BlcnR5a2V5XG4gICAgICAgIGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoVHlwZShhcmd1bWVudCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDMgLyogU3RyaW5nICovOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDQgLyogU3ltYm9sICovOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4zIE9wZXJhdGlvbnMgb24gT2JqZWN0c1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcGVyYXRpb25zLW9uLW9iamVjdHNcbiAgICAgICAgLy8gNy4zLjkgR2V0TWV0aG9kKFYsIFApXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxuICAgICAgICBmdW5jdGlvbiBHZXRNZXRob2QoViwgUCkge1xuICAgICAgICAgICAgdmFyIGZ1bmMgPSBWW1BdO1xuICAgICAgICAgICAgaWYgKGZ1bmMgPT09IHVuZGVmaW5lZCB8fCBmdW5jID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoIUlzQ2FsbGFibGUoZnVuYykpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40IE9wZXJhdGlvbnMgb24gSXRlcmF0b3IgT2JqZWN0c1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcGVyYXRpb25zLW9uLWl0ZXJhdG9yLW9iamVjdHNcbiAgICAgICAgZnVuY3Rpb24gR2V0SXRlcmF0b3Iob2JqKSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gR2V0TWV0aG9kKG9iaiwgaXRlcmF0b3JTeW1ib2wpO1xuICAgICAgICAgICAgaWYgKCFJc0NhbGxhYmxlKG1ldGhvZCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpOyAvLyBmcm9tIENhbGxcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IG1ldGhvZC5jYWxsKG9iaik7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGl0ZXJhdG9yKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40LjQgSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvMjAxNi8jc2VjLWl0ZXJhdG9ydmFsdWVcbiAgICAgICAgZnVuY3Rpb24gSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlclJlc3VsdC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQuNSBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yc3RlcFxuICAgICAgICBmdW5jdGlvbiBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyBmYWxzZSA6IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pdGVyYXRvcmNsb3NlXG4gICAgICAgIGZ1bmN0aW9uIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IpIHtcbiAgICAgICAgICAgIHZhciBmID0gaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAoZilcbiAgICAgICAgICAgICAgICBmLmNhbGwoaXRlcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDkuMSBPcmRpbmFyeSBPYmplY3QgSW50ZXJuYWwgTWV0aG9kcyBhbmQgSW50ZXJuYWwgU2xvdHNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnktb2JqZWN0LWludGVybmFsLW1ldGhvZHMtYW5kLWludGVybmFsLXNsb3RzXG4gICAgICAgIC8vIDkuMS4xLjEgT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeWdldHByb3RvdHlwZW9mXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTykge1xuICAgICAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBPICE9PSBcImZ1bmN0aW9uXCIgfHwgTyA9PT0gZnVuY3Rpb25Qcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCBkb2Vzbid0IHNldCBfX3Byb3RvX18gaW4gRVM1LCBhcyBpdCdzIG5vbi1zdGFuZGFyZC5cbiAgICAgICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgdGhlIHN1cGVyY2xhc3MgY29uc3RydWN0b3IuIENvbXBhdGlibGUgaW1wbGVtZW50YXRpb25zXG4gICAgICAgICAgICAvLyBtdXN0IGVpdGhlciBzZXQgX19wcm90b19fIG9uIGEgc3ViY2xhc3MgY29uc3RydWN0b3IgdG8gdGhlIHN1cGVyY2xhc3MgY29uc3RydWN0b3IsXG4gICAgICAgICAgICAvLyBvciBlbnN1cmUgZWFjaCBjbGFzcyBoYXMgYSB2YWxpZCBgY29uc3RydWN0b3JgIHByb3BlcnR5IG9uIGl0cyBwcm90b3R5cGUgdGhhdFxuICAgICAgICAgICAgLy8gcG9pbnRzIGJhY2sgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgRnVuY3Rpb24uW1tQcm90b3R5cGVdXSwgdGhlbiB0aGlzIGlzIGRlZmluYXRlbHkgaW5oZXJpdGVkLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgY2FzZSB3aGVuIGluIEVTNiBvciB3aGVuIHVzaW5nIF9fcHJvdG9fXyBpbiBhIGNvbXBhdGlibGUgYnJvd3Nlci5cbiAgICAgICAgICAgIGlmIChwcm90byAhPT0gZnVuY3Rpb25Qcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHN1cGVyIHByb3RvdHlwZSBpcyBPYmplY3QucHJvdG90eXBlLCBudWxsLCBvciB1bmRlZmluZWQsIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gTy5wcm90b3R5cGU7XG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlUHJvdG8gPSBwcm90b3R5cGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBpZiAocHJvdG90eXBlUHJvdG8gPT0gbnVsbCB8fCBwcm90b3R5cGVQcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBJZiB0aGUgY29uc3RydWN0b3Igd2FzIG5vdCBhIGZ1bmN0aW9uLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gcHJvdG90eXBlUHJvdG8uY29uc3RydWN0b3I7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBzb21lIGtpbmQgb2Ygc2VsZi1yZWZlcmVuY2UsIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3IgPT09IE8pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIHByZXR0eSBnb29kIGd1ZXNzIGF0IHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBuYWl2ZSBNYXAgc2hpbVxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVNYXBQb2x5ZmlsbCgpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZVNlbnRpbmVsID0ge307XG4gICAgICAgICAgICB2YXIgYXJyYXlTZW50aW5lbCA9IFtdO1xuICAgICAgICAgICAgdmFyIE1hcEl0ZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIE1hcEl0ZXJhdG9yKGtleXMsIHZhbHVlcywgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0ga2V5cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5fa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9zZWxlY3Rvcih0aGlzLl9rZXlzW2luZGV4XSwgdGhpcy5fdmFsdWVzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAxID49IHRoaXMuX2tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiByZXN1bHQsIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXBJdGVyYXRvcjtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIE1hcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXAucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2tleXMubGVuZ3RoOyB9LFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKSA+PSAwOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA+PSAwID8gdGhpcy5fdmFsdWVzW2luZGV4XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBpbmRleCArIDE7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzW2kgLSAxXSA9IHRoaXMuX2tleXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2kgLSAxXSA9IHRoaXMuX3ZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMubGVuZ3RoLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzLl9jYWNoZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldEtleSk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRWYWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0RW50cnkpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzKCk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmVudHJpZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLl9maW5kID0gZnVuY3Rpb24gKGtleSwgaW5zZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUtleSAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKHRoaXMuX2NhY2hlS2V5ID0ga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVJbmRleCA8IDAgJiYgaW5zZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gdGhpcy5fa2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlSW5kZXg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEtleShrZXksIF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUoXywgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRFbnRyeShrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIHZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBuYWl2ZSBTZXQgc2hpbVxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVTZXRQb2x5ZmlsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gU2V0KCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgX01hcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuc2l6ZTsgfSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5oYXModmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuc2V0KHZhbHVlLCB2YWx1ZSksIHRoaXM7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5kZWxldGUodmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX21hcC5jbGVhcigpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5rZXlzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAudmFsdWVzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLmVudHJpZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMua2V5cygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5rZXlzKCk7IH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmFpdmUgV2Vha01hcCBzaGltXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpIHtcbiAgICAgICAgICAgIHZhciBVVUlEX1NJWkUgPSAxNjtcbiAgICAgICAgICAgIHZhciBrZXlzID0gSGFzaE1hcC5jcmVhdGUoKTtcbiAgICAgICAgICAgIHZhciByb290S2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gSGFzaE1hcC5oYXModGFibGUsIHRoaXMuX2tleSkgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBIYXNoTWFwLmdldCh0YWJsZSwgdGhpcy5fa2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVbdGhpcy5fa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBkZWxldGUgdGFibGVbdGhpcy5fa2V5XSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IG5vdCBhIHJlYWwgY2xlYXIsIGp1c3QgbWFrZXMgdGhlIHByZXZpb3VzIGRhdGEgdW5yZWFjaGFibGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gV2Vha01hcDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVVbmlxdWVLZXkoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleTtcbiAgICAgICAgICAgICAgICBkb1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBcIkBAV2Vha01hcEBAXCIgKyBDcmVhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKEhhc2hNYXAuaGFzKGtleXMsIGtleSkpO1xuICAgICAgICAgICAgICAgIGtleXNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgY3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNPd24uY2FsbCh0YXJnZXQsIHJvb3RLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3JlYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcm9vdEtleSwgeyB2YWx1ZTogSGFzaE1hcC5jcmVhdGUoKSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtyb290S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIEZpbGxSYW5kb21CeXRlcyhidWZmZXIsIHNpemUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gTWF0aC5yYW5kb20oKSAqIDB4ZmYgfCAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBHZW5SYW5kb21CeXRlcyhzaXplKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBVaW50OEFycmF5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbXNDcnlwdG8gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZpbGxSYW5kb21CeXRlcyhuZXcgVWludDhBcnJheShzaXplKSwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IEFycmF5KHNpemUpLCBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIENyZWF0ZVVVSUQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBHZW5SYW5kb21CeXRlcyhVVUlEX1NJWkUpO1xuICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgcmFuZG9tIC0gUkZDIDQxMjIgwqcgNC40XG4gICAgICAgICAgICAgICAgZGF0YVs2XSA9IGRhdGFbNl0gJiAweDRmIHwgMHg0MDtcbiAgICAgICAgICAgICAgICBkYXRhWzhdID0gZGF0YVs4XSAmIDB4YmYgfCAweDgwO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IFVVSURfU0laRTsgKytvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ5dGUgPSBkYXRhW29mZnNldF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IDQgfHwgb2Zmc2V0ID09PSA2IHx8IG9mZnNldCA9PT0gOClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIi1cIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGUgPCAxNilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJ5dGUudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXNlcyBhIGhldXJpc3RpYyB1c2VkIGJ5IHY4IGFuZCBjaGFrcmEgdG8gZm9yY2UgYW4gb2JqZWN0IGludG8gZGljdGlvbmFyeSBtb2RlLlxuICAgICAgICBmdW5jdGlvbiBNYWtlRGljdGlvbmFyeShvYmopIHtcbiAgICAgICAgICAgIG9iai5fXyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouX187XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSk7XG59KShSZWZsZWN0IHx8IChSZWZsZWN0ID0ge30pKTtcbiIsImltcG9ydCB7IE1ldGFkYXRhLCBNZXRhZGF0YUNsYXNzLCBNZXRhZGF0YVJlYWRlciB9IGZyb20gJy4uL3R5cGVzL01ldGFkYXRhJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0VmFsdWVNYXAgfSBmcm9tICcuLi9jb21tb24vRGVmYXVsdFZhbHVlTWFwJztcblxudHlwZSBBbnlNZXRhZGF0YSA9IE1ldGFkYXRhPE1ldGFkYXRhUmVhZGVyLCB1bmtub3duPjtcbnR5cGUgQW55TWV0YWRhdGFDbGFzcyA9IE1ldGFkYXRhQ2xhc3M8TWV0YWRhdGFSZWFkZXIsIHVua25vd24sIEFueU1ldGFkYXRhPjtcblxuY29uc3QgbWV0YWRhdGFJbnN0YW5jZU1hcCA9IGNyZWF0ZURlZmF1bHRWYWx1ZU1hcDxBbnlNZXRhZGF0YUNsYXNzLCBTZXQ8QW55TWV0YWRhdGE+PigoKSA9PiBuZXcgU2V0KCkpO1xuXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIge1xuICAgIHN0YXRpYyBnZXRNZXRhZGF0YTxSIGV4dGVuZHMgTWV0YWRhdGFSZWFkZXIsIFQgZXh0ZW5kcyBPYmplY3QsIE0gZXh0ZW5kcyBNZXRhZGF0YTxSLCBUPiA9IE1ldGFkYXRhPFIsIFQ+PihcbiAgICAgICAgdGFyZ2V0OiBULFxuICAgICAgICBtZXRhZGF0YUNsYXNzOiBNZXRhZGF0YUNsYXNzPFIsIFQsIE0+XG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IG1ldGFkYXRhQ2xhc3MuZ2V0UmVmbGVjdEtleSgpO1xuICAgICAgICBsZXQgbWV0YWRhdGEgPSBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbiAgICAgICAgaWYgKCFtZXRhZGF0YSkge1xuICAgICAgICAgICAgbWV0YWRhdGEgPSBuZXcgbWV0YWRhdGFDbGFzcygpO1xuICAgICAgICAgICAgbWV0YWRhdGEuaW5pdCh0YXJnZXQpO1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIG1ldGFkYXRhLCB0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VTZXQgPSBtZXRhZGF0YUluc3RhbmNlTWFwLmdldChtZXRhZGF0YUNsYXNzKTtcbiAgICAgICAgICAgIGluc3RhbmNlU2V0LmFkZChtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhIGFzIE07XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBbGxJbnN0YW5jZW9mPE0gZXh0ZW5kcyBBbnlNZXRhZGF0YUNsYXNzPihtZXRhZGF0YUNsYXNzOiBNKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG1ldGFkYXRhSW5zdGFuY2VNYXAuZ2V0KG1ldGFkYXRhQ2xhc3MpKTtcbiAgICB9XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5pbXBvcnQgeyBJbnN0YW5jZVNjb3BlIH0gZnJvbSAnLi4vZm91bmRhdGlvbi9JbnN0YW5jZVNjb3BlJztcbmltcG9ydCB7IEpzU2VydmljZUNsYXNzIH0gZnJvbSAnLi4vdHlwZXMvSnNTZXJ2aWNlQ2xhc3MnO1xuaW1wb3J0IHsgTWV0YWRhdGEsIE1ldGFkYXRhUmVhZGVyIH0gZnJvbSAnLi4vdHlwZXMvTWV0YWRhdGEnO1xuaW1wb3J0IHsgSWRlbnRpZmllciB9IGZyb20gJy4uL3R5cGVzL0lkZW50aWZpZXInO1xuaW1wb3J0IHsgTGlmZWN5Y2xlIH0gZnJvbSAnLi4vZm91bmRhdGlvbi9MaWZlY3ljbGUnO1xuaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFZhbHVlTWFwIH0gZnJvbSAnLi4vY29tbW9uL0RlZmF1bHRWYWx1ZU1hcCc7XG5pbXBvcnQgeyBNZXRhZGF0YUluc3RhbmNlTWFuYWdlciB9IGZyb20gJy4vTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXInO1xuaW1wb3J0IHsgTWVtYmVyS2V5IH0gZnJvbSAnLi4vdHlwZXMvTWVtYmVyS2V5JztcbmltcG9ydCB7IEtleU9mIH0gZnJvbSAnLi4vdHlwZXMvS2V5T2YnO1xuXG5jb25zdCBDTEFTU19NRVRBREFUQV9LRVkgPSAnaW9jOmNsYXNzLW1ldGFkYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXJrSW5mbyB7XG4gICAgW2tleTogc3RyaW5nIHwgc3ltYm9sXTogdW5rbm93bjtcbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtJbmZvQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1hcCA9IGNyZWF0ZURlZmF1bHRWYWx1ZU1hcDxNZW1iZXJLZXksIE1hcmtJbmZvPigoKSA9PiAoe30gYXMgTWFya0luZm8pKTtcbiAgICBnZXRNYXJrSW5mbyhtZXRob2Q6IE1lbWJlcktleSk6IE1hcmtJbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldChtZXRob2QpO1xuICAgIH1cbiAgICBtYXJrKG1ldGhvZDogTWVtYmVyS2V5LCBrZXk6IE1lbWJlcktleSwgdmFsdWU6IHVua25vd24pIHtcbiAgICAgICAgY29uc3QgbWFya0luZm8gPSB0aGlzLm1hcC5nZXQobWV0aG9kKTtcbiAgICAgICAgbWFya0luZm9ba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXRNZW1iZXJzKCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLm1hcC5rZXlzKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlck1hcmtJbmZvQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1hcCA9IGNyZWF0ZURlZmF1bHRWYWx1ZU1hcDxNZW1iZXJLZXksIFJlY29yZDxudW1iZXIsIE1hcmtJbmZvPj4oKCkgPT4ge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSk7XG4gICAgZ2V0TWFya0luZm8obWV0aG9kOiBNZW1iZXJLZXkpOiBSZWNvcmQ8bnVtYmVyLCBNYXJrSW5mbz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KG1ldGhvZCk7XG4gICAgfVxuICAgIG1hcmsobWV0aG9kOiBNZW1iZXJLZXksIGluZGV4OiBudW1iZXIsIGtleTogTWVtYmVyS2V5LCB2YWx1ZTogdW5rbm93bikge1xuICAgICAgICBjb25zdCBwYXJhbXNNYXJrSW5mbyA9IHRoaXMubWFwLmdldChtZXRob2QpO1xuICAgICAgICBjb25zdCBtYXJrSW5mbyA9IHBhcmFtc01hcmtJbmZvW2luZGV4XSB8fCB7fTtcbiAgICAgICAgbWFya0luZm9ba2V5XSA9IHZhbHVlO1xuICAgICAgICBwYXJhbXNNYXJrSW5mb1tpbmRleF0gPSBtYXJrSW5mbztcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NNYXJrSW5mbyB7XG4gICAgY3RvcjogTWFya0luZm87XG4gICAgbWVtYmVyczogTWFya0luZm9Db250YWluZXI7XG4gICAgcGFyYW1zOiBQYXJhbWV0ZXJNYXJrSW5mb0NvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGFzc01ldGFkYXRhUmVhZGVyPFQ+IGV4dGVuZHMgTWV0YWRhdGFSZWFkZXIge1xuICAgIGdldENsYXNzKCk6IE5ld2FibGU8VD47XG4gICAgZ2V0U2NvcGUoKTogSW5zdGFuY2VTY29wZSB8IHN0cmluZztcbiAgICBnZXRDb25zdHJ1Y3RvclBhcmFtZXRlclR5cGVzKCk6IEFycmF5PElkZW50aWZpZXI+O1xuICAgIGdldE1ldGhvZHMobGlmZWN5Y2xlOiBMaWZlY3ljbGUpOiBBcnJheTxzdHJpbmcgfCBzeW1ib2w+O1xuICAgIGdldFByb3BlcnR5VHlwZU1hcCgpOiBNYXA8c3RyaW5nIHwgc3ltYm9sLCBJZGVudGlmaWVyPjtcbiAgICBnZXRDdG9yTWFya0luZm8oKTogTWFya0luZm87XG4gICAgZ2V0QWxsTWFya2VkTWVtYmVycygpOiBTZXQ8TWVtYmVyS2V5PjtcbiAgICBnZXRNZW1iZXJzTWFya0luZm8obWV0aG9kS2V5OiBLZXlPZjxUPik6IE1hcmtJbmZvO1xuICAgIGdldFBhcmFtZXRlck1hcmtJbmZvKG1ldGhvZEtleTogS2V5T2Y8VD4pOiBSZWNvcmQ8bnVtYmVyLCBNYXJrSW5mbz47XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc01ldGFkYXRhPFQ+IGltcGxlbWVudHMgTWV0YWRhdGE8Q2xhc3NNZXRhZGF0YVJlYWRlcjxUPiwgTmV3YWJsZTxUPj4ge1xuICAgIHN0YXRpYyBnZXRSZWZsZWN0S2V5KCkge1xuICAgICAgICByZXR1cm4gQ0xBU1NfTUVUQURBVEFfS0VZO1xuICAgIH1cbiAgICBwcml2YXRlIHNjb3BlOiBJbnN0YW5jZVNjb3BlIHwgc3RyaW5nID0gSW5zdGFuY2VTY29wZS5TSU5HTEVUT047XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvclBhcmFtZXRlclR5cGVzOiBBcnJheTxJZGVudGlmaWVyPiA9IFtdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbGlmZWN5Y2xlTWV0aG9kc01hcDogUmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgU2V0PExpZmVjeWNsZT4+ID0ge307XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wZXJ0eVR5cGVzTWFwID0gbmV3IE1hcDxzdHJpbmcgfCBzeW1ib2wsIElkZW50aWZpZXI+KCk7XG4gICAgcHJpdmF0ZSBjbGF6eiE6IE5ld2FibGU8VD47XG4gICAgcHJpdmF0ZSByZWFkb25seSBtYXJrczogQ2xhc3NNYXJrSW5mbyA9IHtcbiAgICAgICAgY3Rvcjoge30sXG4gICAgICAgIG1lbWJlcnM6IG5ldyBNYXJrSW5mb0NvbnRhaW5lcigpLFxuICAgICAgICBwYXJhbXM6IG5ldyBQYXJhbWV0ZXJNYXJrSW5mb0NvbnRhaW5lcigpXG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPihjdG9yOiBOZXdhYmxlPFQ+KSB7XG4gICAgICAgIHJldHVybiBNZXRhZGF0YUluc3RhbmNlTWFuYWdlci5nZXRNZXRhZGF0YShjdG9yLCBDbGFzc01ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBpbml0KHRhcmdldDogTmV3YWJsZTxUPikge1xuICAgICAgICB0aGlzLmNsYXp6ID0gdGFyZ2V0O1xuICAgICAgICBjb25zdCBjb25zdHIgPSB0YXJnZXQgYXMgSnNTZXJ2aWNlQ2xhc3M8dW5rbm93bj47XG4gICAgICAgIGlmICh0eXBlb2YgY29uc3RyLnNjb3BlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjb3BlKGNvbnN0ci5zY29wZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbnN0ci5pbmplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGluamVjdGlvbnMgPSBjb25zdHIuaW5qZWN0KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpbmplY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRQcm9wZXJ0eVR5cGUoa2V5LCBpbmplY3Rpb25zW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29uc3RyLm1ldGFkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGNvbnN0ci5tZXRhZGF0YSgpO1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLnNjb3BlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTY29wZShtZXRhZGF0YS5zY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbmplY3Rpb25zID0gbWV0YWRhdGEuaW5qZWN0O1xuICAgICAgICAgICAgaWYgKGluamVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpbmplY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkUHJvcGVydHlUeXBlKGtleSwgaW5qZWN0aW9uc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrZXIoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdG9yOiAoa2V5OiBzdHJpbmcgfCBzeW1ib2wsIHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrcy5jdG9yW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZW1iZXI6IChwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sIHwgbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyazogKGtleTogc3RyaW5nIHwgc3ltYm9sLCB2YWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrcy5tZW1iZXJzLm1hcmsocHJvcGVydHlLZXksIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJhbWV0ZXI6IChwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyazogKGtleTogc3RyaW5nIHwgc3ltYm9sLCB2YWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrcy5wYXJhbXMubWFyayhwcm9wZXJ0eUtleSwgaW5kZXgsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2V0U2NvcGUoc2NvcGU6IEluc3RhbmNlU2NvcGUgfCBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBzZXRDb25zdHJ1Y3RvclBhcmFtZXRlclR5cGUoaW5kZXg6IG51bWJlciwgY2xzOiBJZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3JQYXJhbWV0ZXJUeXBlc1tpbmRleF0gPSBjbHM7XG4gICAgfVxuICAgIHJlY29yZFByb3BlcnR5VHlwZShwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCB0eXBlOiBJZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlUeXBlc01hcC5zZXQocHJvcGVydHlLZXksIHR5cGUpO1xuICAgIH1cbiAgICBhZGRMaWZlY3ljbGVNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaWZlY3ljbGU6IExpZmVjeWNsZSkge1xuICAgICAgICBjb25zdCBsaWZlY3ljbGVzID0gdGhpcy5nZXRMaWZlY3ljbGVzKG1ldGhvZE5hbWUpO1xuICAgICAgICBsaWZlY3ljbGVzLmFkZChsaWZlY3ljbGUpO1xuICAgICAgICB0aGlzLmxpZmVjeWNsZU1ldGhvZHNNYXBbbWV0aG9kTmFtZV0gPSBsaWZlY3ljbGVzO1xuICAgIH1cbiAgICBwcml2YXRlIGdldExpZmVjeWNsZXMobWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpZmVjeWNsZU1ldGhvZHNNYXBbbWV0aG9kTmFtZV0gfHwgbmV3IFNldDxMaWZlY3ljbGU+KCk7XG4gICAgfVxuICAgIGdldE1ldGhvZHMobGlmZWN5Y2xlOiBMaWZlY3ljbGUpOiBBcnJheTxzdHJpbmcgfCBzeW1ib2w+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubGlmZWN5Y2xlTWV0aG9kc01hcCkuZmlsdGVyKGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpZmVjeWNsZXMgPSB0aGlzLmxpZmVjeWNsZU1ldGhvZHNNYXBbaXRdO1xuICAgICAgICAgICAgcmV0dXJuIGxpZmVjeWNsZXMuaGFzKGxpZmVjeWNsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWFkZXIoKTogQ2xhc3NNZXRhZGF0YVJlYWRlcjxUPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRDbGFzczogKCkgPT4gdGhpcy5jbGF6eixcbiAgICAgICAgICAgIGdldFNjb3BlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Q29uc3RydWN0b3JQYXJhbWV0ZXJUeXBlczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yUGFyYW1ldGVyVHlwZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TWV0aG9kczogKGxpZmVjeWNsZTogTGlmZWN5Y2xlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWV0aG9kcyhsaWZlY3ljbGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFByb3BlcnR5VHlwZU1hcDogKCkgPT4gbmV3IE1hcCh0aGlzLnByb3BlcnR5VHlwZXNNYXApLFxuICAgICAgICAgICAgZ2V0Q3Rvck1hcmtJbmZvOiAoKTogTWFya0luZm8gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnRoaXMubWFya3MuY3RvciB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEFsbE1hcmtlZE1lbWJlcnM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXJrcy5tZW1iZXJzLmdldE1lbWJlcnMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRNZW1iZXJzTWFya0luZm86IChrZXk6IEtleU9mPFQ+KTogTWFya0luZm8gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcmtzLm1lbWJlcnMuZ2V0TWFya0luZm8oa2V5IGFzIE1lbWJlcktleSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0UGFyYW1ldGVyTWFya0luZm86IChtZXRob2RLZXk6IEtleU9mPFQ+KTogUmVjb3JkPG51bWJlciwgTWFya0luZm8+ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXJrcy5wYXJhbXMuZ2V0TWFya0luZm8obWV0aG9kS2V5IGFzIE1lbWJlcktleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2VydmljZUZhY3RvcnkgfSBmcm9tICcuLi90eXBlcy9TZXJ2aWNlRmFjdG9yeSc7XG5pbXBvcnQgeyBJZGVudGlmaWVyIH0gZnJvbSAnLi4vdHlwZXMvSWRlbnRpZmllcic7XG5pbXBvcnQgeyBDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEvQ2xhc3NNZXRhZGF0YSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHQgfSBmcm9tICcuL0FwcGxpY2F0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlRmFjdG9yeURlZjxUPiB7XG4gICAgc3RhdGljIGNyZWF0ZUZyb21DbGFzc01ldGFkYXRhPFQ+KG1ldGFkYXRhOiBDbGFzc01ldGFkYXRhPFQ+KSB7XG4gICAgICAgIHJldHVybiBuZXcgU2VydmljZUZhY3RvcnlEZWYoKGNvbnRhaW5lcjogQXBwbGljYXRpb25Db250ZXh0LCBvd25lcjogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBtZXRhZGF0YS5yZWFkZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGF6eiA9IHJlYWRlci5nZXRDbGFzcygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIuZ2V0SW5zdGFuY2UoY2xhenosIG93bmVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgZmFjdG9yeTogU2VydmljZUZhY3Rvcnk8VCwgdW5rbm93bj4sIHB1YmxpYyByZWFkb25seSBpbmplY3Rpb25zPzogSWRlbnRpZmllcltdKSB7fVxufVxuIiwiaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuLi90eXBlcy9NZXRhZGF0YSc7XG5pbXBvcnQgeyBJZGVudGlmaWVyIH0gZnJvbSAnLi4vdHlwZXMvSWRlbnRpZmllcic7XG5pbXBvcnQgeyBTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4uL3R5cGVzL1NlcnZpY2VGYWN0b3J5JztcbmltcG9ydCB7IEZhY3RvcnlJZGVudGlmaWVyIH0gZnJvbSAnLi4vdHlwZXMvRmFjdG9yeUlkZW50aWZpZXInO1xuaW1wb3J0IHsgQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4vQ2xhc3NNZXRhZGF0YSc7XG5pbXBvcnQgeyBTZXJ2aWNlRmFjdG9yeURlZiB9IGZyb20gJy4uL2ZvdW5kYXRpb24vU2VydmljZUZhY3RvcnlEZWYnO1xuaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuaW1wb3J0IHsgUGFydGlhbEluc3RBd2FyZVByb2Nlc3NvciB9IGZyb20gJy4uL3R5cGVzL0luc3RhbnRpYXRpb25Bd2FyZVByb2Nlc3Nvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsTWV0YWRhdGFSZWFkZXIge1xuICAgIGdldENvbXBvbmVudEZhY3Rvcnk8VD4oa2V5OiBGYWN0b3J5SWRlbnRpZmllcik6IFNlcnZpY2VGYWN0b3J5RGVmPFQ+IHwgdW5kZWZpbmVkO1xuICAgIGdldENsYXNzTWV0YWRhdGE8VD4oYWxpYXNOYW1lOiBzdHJpbmcgfCBzeW1ib2wpOiBDbGFzc01ldGFkYXRhPFQ+IHwgdW5kZWZpbmVkO1xuICAgIGdldEluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMoKTogQXJyYXk8TmV3YWJsZTxQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yPj47XG59XG5leHBvcnQgY2xhc3MgR2xvYmFsTWV0YWRhdGEgaW1wbGVtZW50cyBNZXRhZGF0YTxHbG9iYWxNZXRhZGF0YVJlYWRlciwgdm9pZD4ge1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IElOU1RBTkNFID0gbmV3IEdsb2JhbE1ldGFkYXRhKCk7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gR2xvYmFsTWV0YWRhdGEuSU5TVEFOQ0U7XG4gICAgfVxuICAgIHByaXZhdGUgY2xhc3NBbGlhc01ldGFkYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcgfCBzeW1ib2wsIENsYXNzTWV0YWRhdGE8dW5rbm93bj4+KCk7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3JpZXMgPSBuZXcgTWFwPEZhY3RvcnlJZGVudGlmaWVyLCBTZXJ2aWNlRmFjdG9yeURlZjx1bmtub3duPj4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2Nlc3NvckNsYXNzZXM6IFNldDxOZXdhYmxlPFBhcnRpYWxJbnN0QXdhcmVQcm9jZXNzb3I+PiA9IG5ldyBTZXQoKTtcbiAgICByZWNvcmRGYWN0b3J5PFQ+KHN5bWJvbDogRmFjdG9yeUlkZW50aWZpZXIsIGZhY3Rvcnk6IFNlcnZpY2VGYWN0b3J5PFQsIHVua25vd24+LCBpbmplY3Rpb25zPzogSWRlbnRpZmllcltdKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yaWVzLnNldChzeW1ib2wsIG5ldyBTZXJ2aWNlRmFjdG9yeURlZihmYWN0b3J5LCBpbmplY3Rpb25zKSk7XG4gICAgfVxuICAgIHJlY29yZENsYXNzQWxpYXM8VD4oYWxpYXNOYW1lOiBzdHJpbmcgfCBzeW1ib2wsIG1ldGFkYXRhOiBDbGFzc01ldGFkYXRhPFQ+KSB7XG4gICAgICAgIHRoaXMuY2xhc3NBbGlhc01ldGFkYXRhTWFwLnNldChhbGlhc05hbWUsIG1ldGFkYXRhKTtcbiAgICB9XG4gICAgcmVjb3JkUHJvY2Vzc29yQ2xhc3MoY2xheno6IE5ld2FibGU8UGFydGlhbEluc3RBd2FyZVByb2Nlc3Nvcj4pIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3JDbGFzc2VzLmFkZChjbGF6eik7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIFBBU1M7XG4gICAgfVxuICAgIHJlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldENvbXBvbmVudEZhY3Rvcnk6IDxUPihrZXk6IEZhY3RvcnlJZGVudGlmaWVyKTogU2VydmljZUZhY3RvcnlEZWY8VD4gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEZhY3Rvcmllcy5nZXQoa2V5KSBhcyBTZXJ2aWNlRmFjdG9yeURlZjxUPiB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDbGFzc01ldGFkYXRhOiA8VD4oYWxpYXNOYW1lOiBzdHJpbmcgfCBzeW1ib2wpOiBDbGFzc01ldGFkYXRhPFQ+IHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0FsaWFzTWV0YWRhdGFNYXAuZ2V0KGFsaWFzTmFtZSkgYXMgQ2xhc3NNZXRhZGF0YTxUPiB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRJbnN0QXdhcmVQcm9jZXNzb3JDbGFzc2VzOiAoKTogQXJyYXk8TmV3YWJsZTxQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yPj4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucHJvY2Vzc29yQ2xhc3Nlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBFdmFsdWF0aW9uT3B0aW9uczxPLCBFIGV4dGVuZHMgc3RyaW5nLCBBID0gdW5rbm93bj4ge1xuICAgIHR5cGU6IEU7XG4gICAgb3duZXI/OiBPO1xuICAgIHByb3BlcnR5TmFtZT86IHN0cmluZyB8IHN5bWJvbDtcbiAgICBleHRlcm5hbEFyZ3M/OiBBO1xufVxuXG5leHBvcnQgZW51bSBFeHByZXNzaW9uVHlwZSB7XG4gICAgRU5WID0gJ2luamVjdC1lbnZpcm9ubWVudC12YXJpYWJsZXMnLFxuICAgIEpTT05fUEFUSCA9ICdpbmplY3QtanNvbi1kYXRhJyxcbiAgICBBUkdWID0gJ2luamVjdC1hcmd2J1xufVxuIiwiZXhwb3J0IGNvbnN0IGlzTm9kZUpzID0gKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBldmFsKCdyZXF1aXJlKFwib3NcIikuYXJjaCgpOycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59KSgpO1xuIiwiaW1wb3J0IHsgQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL21ldGFkYXRhL0NsYXNzTWV0YWRhdGEnO1xuaW1wb3J0IHsgR2xvYmFsTWV0YWRhdGEgfSBmcm9tICcuLi9tZXRhZGF0YS9HbG9iYWxNZXRhZGF0YSc7XG5pbXBvcnQgeyBNZXRhZGF0YUluc3RhbmNlTWFuYWdlciB9IGZyb20gJy4uL21ldGFkYXRhL01ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyJztcbmltcG9ydCB7IEV4cHJlc3Npb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvRXZhbHVhdGVPcHRpb25zJztcbmltcG9ydCB7IGlzTm9kZUpzIH0gZnJvbSAnLi4vY29tbW9uL2lzTm9kZUpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFZhbHVlPEEgPSB1bmtub3duPihleHByZXNzaW9uOiBzdHJpbmcsIHR5cGU6IEV4cHJlc3Npb25UeXBlIHwgc3RyaW5nLCBleHRlcm5hbEFyZ3M/OiBBKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEV4cHJlc3Npb25UeXBlLkVOVjpcbiAgICAgICAgY2FzZSBFeHByZXNzaW9uVHlwZS5BUkdWOlxuICAgICAgICAgICAgaWYgKCFpc05vZGVKcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiJHt0eXBlfVwiIGV2YWx1YXRvciBvbmx5IHN1cHBvcnRzIG5vZGVqcyBlbnZpcm9ubWVudCFgKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IE1ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyLmdldE1ldGFkYXRhKHRhcmdldC5jb25zdHJ1Y3RvciwgQ2xhc3NNZXRhZGF0YSk7XG4gICAgICAgIGNvbnN0IHZhbHVlX3N5bWJvbCA9IFN5bWJvbCgnJyk7XG4gICAgICAgIG1ldGFkYXRhLnJlY29yZFByb3BlcnR5VHlwZShwcm9wZXJ0eUtleSwgdmFsdWVfc3ltYm9sKTtcbiAgICAgICAgR2xvYmFsTWV0YWRhdGEuZ2V0SW5zdGFuY2UoKS5yZWNvcmRGYWN0b3J5KHZhbHVlX3N5bWJvbCwgKGNvbnRhaW5lciwgb3duZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PlxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5ldmFsdWF0ZTxzdHJpbmcsIHR5cGVvZiBvd25lciwgQT4oZXhwcmVzc2lvbiBhcyBzdHJpbmcsIHtcbiAgICAgICAgICAgICAgICAgICAgb3duZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4dGVybmFsQXJnc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgVmFsdWUgfSBmcm9tICcuL1ZhbHVlJztcbmltcG9ydCB7IEV4cHJlc3Npb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvRXZhbHVhdGVPcHRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIEFyZ3YobmFtZTogc3RyaW5nLCBhcmd2OiBzdHJpbmdbXSA9IHByb2Nlc3MuYXJndikge1xuICAgIHJldHVybiBWYWx1ZShuYW1lLCBFeHByZXNzaW9uVHlwZS5BUkdWLCBhcmd2KTtcbn1cbiIsImltcG9ydCB7IEdsb2JhbE1ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEvR2xvYmFsTWV0YWRhdGEnO1xuaW1wb3J0IHsgQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL21ldGFkYXRhL0NsYXNzTWV0YWRhdGEnO1xuaW1wb3J0IHsgTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIgfSBmcm9tICcuLi9tZXRhZGF0YS9NZXRhZGF0YUluc3RhbmNlTWFuYWdlcic7XG5pbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vdHlwZXMvTmV3YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCaW5kKGFsaWFzTmFtZTogc3RyaW5nIHwgc3ltYm9sKTogQ2xhc3NEZWNvcmF0b3Ige1xuICAgIHJldHVybiA8VEZ1bmN0aW9uIGV4dGVuZHMgRnVuY3Rpb24+KHRhcmdldDogVEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEodGFyZ2V0IGFzIHVua25vd24gYXMgTmV3YWJsZTx1bmtub3duPiwgQ2xhc3NNZXRhZGF0YSk7XG4gICAgICAgIEdsb2JhbE1ldGFkYXRhLmdldEluc3RhbmNlKCkucmVjb3JkQ2xhc3NBbGlhcyhhbGlhc05hbWUsIG1ldGFkYXRhKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgVmFsdWUgfSBmcm9tICcuL1ZhbHVlJztcbmltcG9ydCB7IEV4cHJlc3Npb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvRXZhbHVhdGVPcHRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIEVudihuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gVmFsdWUobmFtZSwgRXhwcmVzc2lvblR5cGUuRU5WKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc051bGwodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBudWxsIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyB1bmRlZmluZWQge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90RGVmaW5lZDxUPih2YWx1ZTogVCB8IHVuZGVmaW5lZCB8IG51bGwpOiB2YWx1ZSBpcyB1bmRlZmluZWQgfCBudWxsIHtcbiAgICByZXR1cm4gaXNOdWxsKHZhbHVlKSB8fCBpc1VuZGVmaW5lZCh2YWx1ZSk7XG59XG4iLCJpbXBvcnQgeyBHbG9iYWxNZXRhZGF0YSB9IGZyb20gJy4uL21ldGFkYXRhL0dsb2JhbE1ldGFkYXRhJztcbmltcG9ydCB7IE5ld2FibGUgfSBmcm9tICcuLi90eXBlcy9OZXdhYmxlJztcbmltcG9ydCB7IEZhY3RvcnlJZGVudGlmaWVyIH0gZnJvbSAnLi4vdHlwZXMvRmFjdG9yeUlkZW50aWZpZXInO1xuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9JbnN0YW5jZSc7XG5pbXBvcnQgeyBpc05vdERlZmluZWQgfSBmcm9tICcuLi9jb21tb24vaXNOb3REZWZpbmVkJztcblxuZXhwb3J0IGZ1bmN0aW9uIEZhY3RvcnkocHJvZHVjZUlkZW50aWZpZXI/OiBGYWN0b3J5SWRlbnRpZmllcik6IE1ldGhvZERlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IEdsb2JhbE1ldGFkYXRhLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGNvbnN0IGNsYXp6ID0gdGFyZ2V0LmNvbnN0cnVjdG9yIGFzIE5ld2FibGU8SW5zdGFuY2U8dW5rbm93bj4+O1xuXG4gICAgICAgIGlmIChpc05vdERlZmluZWQocHJvZHVjZUlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICBwcm9kdWNlSWRlbnRpZmllciA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpyZXR1cm50eXBlJywgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm90RGVmaW5lZChwcm9kdWNlSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJldHVybiB0eXBlIG5vdCByZWNvZ25pemVkLCBjYW5ub3QgcGVyZm9ybSBpbnN0YW5jZSBjcmVhdGlvbiEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmplY3Rpb25zID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcblxuICAgICAgICBtZXRhZGF0YS5yZWNvcmRGYWN0b3J5KFxuICAgICAgICAgICAgcHJvZHVjZUlkZW50aWZpZXIsXG4gICAgICAgICAgICAoY29udGFpbmVyLCBvd25lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gY29udGFpbmVyLmdldEluc3RhbmNlKGNsYXp6LCBvd25lcik7XG4gICAgICAgICAgICAgICAgY29uc3QgZnVuYyA9IGluc3RhbmNlW3Byb3BlcnR5S2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNvbnRhaW5lci5nZXRJbnN0YW5jZShjbGF6eik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuYy5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGZ1bmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluamVjdGlvbnNcbiAgICAgICAgKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuaW1wb3J0IHsgQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL21ldGFkYXRhL0NsYXNzTWV0YWRhdGEnO1xuaW1wb3J0IHsgSWRlbnRpZmllciB9IGZyb20gJy4uL3R5cGVzL0lkZW50aWZpZXInO1xuaW1wb3J0IHsgTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIgfSBmcm9tICcuLi9tZXRhZGF0YS9NZXRhZGF0YUluc3RhbmNlTWFuYWdlcic7XG5pbXBvcnQgeyBpc05vdERlZmluZWQgfSBmcm9tICcuLi9jb21tb24vaXNOb3REZWZpbmVkJztcblxuZXhwb3J0IGZ1bmN0aW9uIEluamVjdDxUPihjb25zdHI/OiBJZGVudGlmaWVyPFQ+KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIDxUYXJnZXQ+KHRhcmdldDogVGFyZ2V0LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBwYXJhbWV0ZXJJbmRleD86IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcGFyYW1ldGVySW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldENvbnN0ciA9IHRhcmdldCBhcyBOZXdhYmxlPFQ+O1xuICAgICAgICAgICAgaWYgKGlzTm90RGVmaW5lZChjb25zdHIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3RyID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCB0YXJnZXQsIHByb3BlcnR5S2V5KVtwYXJhbWV0ZXJJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOb3REZWZpbmVkKGNvbnN0cikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1R5cGUgbm90IHJlY29nbml6ZWQsIGluamVjdGlvbiBjYW5ub3QgYmUgcGVyZm9ybWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbGFzc01ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEodGFyZ2V0Q29uc3RyLCBDbGFzc01ldGFkYXRhKTtcbiAgICAgICAgICAgIGNsYXNzTWV0YWRhdGEuc2V0Q29uc3RydWN0b3JQYXJhbWV0ZXJUeXBlKHBhcmFtZXRlckluZGV4LCBjb25zdHIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmIHRhcmdldCAhPT0gbnVsbCAmJiBwcm9wZXJ0eUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBwcm9wZXJ0eVxuICAgICAgICAgICAgaWYgKGlzTm90RGVmaW5lZChjb25zdHIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3RyID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc05vdERlZmluZWQoY29uc3RyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHlwZSBub3QgcmVjb2duaXplZCwgaW5qZWN0aW9uIGNhbm5vdCBiZSBwZXJmb3JtZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBDbGFzc01ldGFkYXRhKTtcbiAgICAgICAgICAgIG1ldGFkYXRhLnJlY29yZFByb3BlcnR5VHlwZShwcm9wZXJ0eUtleSwgY29uc3RyKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vdHlwZXMvTmV3YWJsZSc7XG5pbXBvcnQgeyBQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yIH0gZnJvbSAnLi4vdHlwZXMvSW5zdGFudGlhdGlvbkF3YXJlUHJvY2Vzc29yJztcbmltcG9ydCB7IEdsb2JhbE1ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEvR2xvYmFsTWV0YWRhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gSW5zdEF3YXJlUHJvY2Vzc29yKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiA8Q2xzIGV4dGVuZHMgTmV3YWJsZTxQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yPj4odGFyZ2V0OiBDbHMpIHtcbiAgICAgICAgR2xvYmFsTWV0YWRhdGEuZ2V0SW5zdGFuY2UoKS5yZWNvcmRQcm9jZXNzb3JDbGFzcyh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBWYWx1ZSB9IGZyb20gJy4vVmFsdWUnO1xuaW1wb3J0IHsgRXhwcmVzc2lvblR5cGUgfSBmcm9tICcuLi90eXBlcy9FdmFsdWF0ZU9wdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gSlNPTkRhdGEobmFtZXNwYWNlOiBzdHJpbmcsIGpzb25wYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gVmFsdWUoYCR7bmFtZXNwYWNlfToke2pzb25wYXRofWAsIEV4cHJlc3Npb25UeXBlLkpTT05fUEFUSCk7XG59XG4iLCJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgTGlmZWN5Y2xlIH0gZnJvbSAnLi4vZm91bmRhdGlvbi9MaWZlY3ljbGUnO1xuaW1wb3J0IHsgQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL21ldGFkYXRhL0NsYXNzTWV0YWRhdGEnO1xuaW1wb3J0IHsgTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIgfSBmcm9tICcuLi9tZXRhZGF0YS9NZXRhZGF0YUluc3RhbmNlTWFuYWdlcic7XG5cbi8qKlxuICogVXJuIGNhbGxzIHRoZSBtZXRob2RzIGFubm90YXRlZCB3aXRoIEBQb3N0SW5qZWN0IG9ubHkgb25jZSwganVzdCBhZnRlciB0aGUgaW5qZWN0aW9uIG9mIHByb3BlcnRpZXMuXG4gKiBAYW5ub3RhdGlvblxuICovXG5leHBvcnQgY29uc3QgTGlmZWN5Y2xlRGVjb3JhdG9yID0gKGxpZmVjeWNsZTogTGlmZWN5Y2xlKTogTWV0aG9kRGVjb3JhdG9yID0+IHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBDbGFzc01ldGFkYXRhKTtcbiAgICAgICAgbWV0YWRhdGEuYWRkTGlmZWN5Y2xlTWV0aG9kKHByb3BlcnR5S2V5LCBsaWZlY3ljbGUpO1xuICAgIH07XG59O1xuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCB7IE1ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyIH0gZnJvbSAnLi4vbWV0YWRhdGEvTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXInO1xuaW1wb3J0IHsgQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL21ldGFkYXRhL0NsYXNzTWV0YWRhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gTWFyayhrZXk6IHN0cmluZyB8IHN5bWJvbCwgdmFsdWU6IHVua25vd24gPSB0cnVlKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiBmdW5jdGlvbiAoXG4gICAgICAgIC4uLmFyZ3M6XG4gICAgICAgICAgICB8IFBhcmFtZXRlcnM8Q2xhc3NEZWNvcmF0b3I+XG4gICAgICAgICAgICB8IFBhcmFtZXRlcnM8TWV0aG9kRGVjb3JhdG9yPlxuICAgICAgICAgICAgfCBQYXJhbWV0ZXJzPFByb3BlcnR5RGVjb3JhdG9yPlxuICAgICAgICAgICAgfCBQYXJhbWV0ZXJzPFBhcmFtZXRlckRlY29yYXRvcj5cbiAgICApIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAvLyBjbGFzcyBkZWNvcmF0b3JcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEoYXJnc1swXSwgQ2xhc3NNZXRhZGF0YSk7XG4gICAgICAgICAgICBtZXRhZGF0YS5tYXJrZXIoKS5jdG9yKGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAvLyBwcm9wZXJ0eSBkZWNvcmF0b3JcbiAgICAgICAgICAgIGNvbnN0IFtwcm90b3R5cGUsIHByb3BlcnR5S2V5XSA9IGFyZ3M7XG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IE1ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyLmdldE1ldGFkYXRhKHByb3RvdHlwZS5jb25zdHJ1Y3RvciwgQ2xhc3NNZXRhZGF0YSk7XG4gICAgICAgICAgICBtZXRhZGF0YS5tYXJrZXIoKS5tZW1iZXIocHJvcGVydHlLZXkpLm1hcmsoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGFyZ3NbMl0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAvLyBwYXJhbWV0ZXIgZGVjb3JhdG9yXG4gICAgICAgICAgICBjb25zdCBbcHJvdG90eXBlLCBwcm9wZXJ0eUtleSwgaW5kZXhdID0gYXJncztcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEocHJvdG90eXBlLmNvbnN0cnVjdG9yLCBDbGFzc01ldGFkYXRhKTtcbiAgICAgICAgICAgIG1ldGFkYXRhLm1hcmtlcigpLnBhcmFtZXRlcihwcm9wZXJ0eUtleSwgaW5kZXgpLm1hcmsoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBtZXRob2QgZGVjb3JhdG9yXG4gICAgICAgICAgICBjb25zdCBbcHJvdG90eXBlLCBwcm9wZXJ0eUtleV0gPSBhcmdzO1xuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBNZXRhZGF0YUluc3RhbmNlTWFuYWdlci5nZXRNZXRhZGF0YShwcm90b3R5cGUuY29uc3RydWN0b3IsIENsYXNzTWV0YWRhdGEpO1xuICAgICAgICAgICAgbWV0YWRhdGEubWFya2VyKCkubWVtYmVyKHByb3BlcnR5S2V5KS5tYXJrKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsImV4cG9ydCBlbnVtIExpZmVjeWNsZSB7XG4gICAgUFJFX0lOSkVDVCA9ICdpb2Mtc2NvcGU6cHJlLWluamVjdCcsXG4gICAgUE9TVF9JTkpFQ1QgPSAnaW9jLXNjb3BlOnBvc3QtaW5qZWN0JyxcbiAgICBQUkVfREVTVFJPWSA9ICdpb2Mtc2NvcGU6cHJlLWRlc3Ryb3knXG59XG4iLCJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgTGlmZWN5Y2xlIH0gZnJvbSAnLi4vZm91bmRhdGlvbi9MaWZlY3ljbGUnO1xuaW1wb3J0IHsgTGlmZWN5Y2xlRGVjb3JhdG9yIH0gZnJvbSAnLi9MaWZlY3ljbGVEZWNvcmF0b3InO1xuXG4vKipcbiAqIFVybiBjYWxscyB0aGUgbWV0aG9kcyBhbm5vdGF0ZWQgd2l0aCBAUG9zdEluamVjdCBvbmx5IG9uY2UsIGp1c3QgYWZ0ZXIgdGhlIGluamVjdGlvbiBvZiBwcm9wZXJ0aWVzLlxuICogQGFubm90YXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFBvc3RJbmplY3QgPSAoKTogTWV0aG9kRGVjb3JhdG9yID0+IExpZmVjeWNsZURlY29yYXRvcihMaWZlY3ljbGUuUE9TVF9JTkpFQ1QpO1xuIiwiaW1wb3J0IHsgTGlmZWN5Y2xlRGVjb3JhdG9yIH0gZnJvbSAnLi9MaWZlY3ljbGVEZWNvcmF0b3InO1xuaW1wb3J0IHsgTGlmZWN5Y2xlIH0gZnJvbSAnLi4vZm91bmRhdGlvbi9MaWZlY3ljbGUnO1xuXG5leHBvcnQgY29uc3QgUHJlRGVzdHJveSA9ICgpID0+IExpZmVjeWNsZURlY29yYXRvcihMaWZlY3ljbGUuUFJFX0RFU1RST1kpO1xuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCB7IExpZmVjeWNsZSB9IGZyb20gJy4uL2ZvdW5kYXRpb24vTGlmZWN5Y2xlJztcbmltcG9ydCB7IExpZmVjeWNsZURlY29yYXRvciB9IGZyb20gJy4vTGlmZWN5Y2xlRGVjb3JhdG9yJztcblxuLyoqXG4gKiBVcm4gY2FsbHMgdGhlIG1ldGhvZHMgYW5ub3RhdGVkIHdpdGggQFBvc3RJbmplY3Qgb25seSBvbmNlLCBqdXN0IGFmdGVyIHRoZSBpbmplY3Rpb24gb2YgcHJvcGVydGllcy5cbiAqIEBhbm5vdGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBQcmVJbmplY3QgPSAoKTogTWV0aG9kRGVjb3JhdG9yID0+IExpZmVjeWNsZURlY29yYXRvcihMaWZlY3ljbGUuUFJFX0lOSkVDVCk7XG4iLCJpbXBvcnQgeyBJbnN0YW5jZVNjb3BlIH0gZnJvbSAnLi4vZm91bmRhdGlvbi9JbnN0YW5jZVNjb3BlJztcbmltcG9ydCB7IENsYXNzTWV0YWRhdGEgfSBmcm9tICcuLi9tZXRhZGF0YS9DbGFzc01ldGFkYXRhJztcbmltcG9ydCB7IE1ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyIH0gZnJvbSAnLi4vbWV0YWRhdGEvTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXInO1xuaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2NvcGUoc2NvcGU6IEluc3RhbmNlU2NvcGUgfCBzdHJpbmcpOiBDbGFzc0RlY29yYXRvciB7XG4gICAgcmV0dXJuIDxURnVuY3Rpb24gZXh0ZW5kcyBGdW5jdGlvbj4odGFyZ2V0OiBURnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBNZXRhZGF0YUluc3RhbmNlTWFuYWdlci5nZXRNZXRhZGF0YSh0YXJnZXQgYXMgdW5rbm93biBhcyBOZXdhYmxlPHVua25vd24+LCBDbGFzc01ldGFkYXRhKTtcbiAgICAgICAgbWV0YWRhdGEuc2V0U2NvcGUoc2NvcGUpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBBbnlGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzL0FueUZ1bmN0aW9uJztcblxuZXhwb3J0IHR5cGUgRXZlbnRMaXN0ZW5lciA9IEFueUZ1bmN0aW9uO1xuZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudHMgPSBuZXcgTWFwPHN0cmluZyB8IHN5bWJvbCwgRXZlbnRMaXN0ZW5lcltdPigpO1xuXG4gICAgb24odHlwZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5ldmVudHMuZ2V0KHR5cGUpO1xuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gW2xpc3RlbmVyXTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNldCh0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBscyA9IGxpc3RlbmVycyBhcyBFdmVudExpc3RlbmVyW107XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGxzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbWl0KHR5cGU6IHN0cmluZyB8IHN5bWJvbCwgLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmdldCh0eXBlKT8uZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSWRlbnRpZmllciB9IGZyb20gJy4uL3R5cGVzL0lkZW50aWZpZXInO1xuXG50eXBlIEludm9rZUZ1bmN0aW9uQXJncyA9IHtcbiAgICBhcmdzPzogdW5rbm93bltdO1xufTtcbnR5cGUgSW52b2tlRnVuY3Rpb25JbmplY3Rpb25zID0ge1xuICAgIGluamVjdGlvbnM/OiBJZGVudGlmaWVyW107XG59O1xuXG50eXBlIEludm9rZUZ1bmN0aW9uQmFzaWNPcHRpb25zPFQ+ID0ge1xuICAgIGNvbnRleHQ/OiBUO1xufTtcblxuZXhwb3J0IHR5cGUgSW52b2tlRnVuY3Rpb25PcHRpb25zPFQ+ID1cbiAgICB8IChJbnZva2VGdW5jdGlvbkJhc2ljT3B0aW9uczxUPiAmIEludm9rZUZ1bmN0aW9uQXJncylcbiAgICB8IChJbnZva2VGdW5jdGlvbkJhc2ljT3B0aW9uczxUPiAmIEludm9rZUZ1bmN0aW9uSW5qZWN0aW9ucyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNBcmdzPFQ+KG9wdGlvbnM6IEludm9rZUZ1bmN0aW9uT3B0aW9uczxUPik6IG9wdGlvbnMgaXMgSW52b2tlRnVuY3Rpb25CYXNpY09wdGlvbnM8VD4gJiBJbnZva2VGdW5jdGlvbkFyZ3Mge1xuICAgIHJldHVybiAnYXJncycgaW4gb3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0luamVjdGlvbnM8VD4oXG4gICAgb3B0aW9uczogSW52b2tlRnVuY3Rpb25PcHRpb25zPFQ+XG4pOiBvcHRpb25zIGlzIEludm9rZUZ1bmN0aW9uQmFzaWNPcHRpb25zPFQ+ICYgSW52b2tlRnVuY3Rpb25JbmplY3Rpb25zIHtcbiAgICByZXR1cm4gJ2luamVjdGlvbnMnIGluIG9wdGlvbnM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xudmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4gZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQscj0xLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWZvcih2YXIgbyBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSk7cmV0dXJuIGV9LGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiB0KCl7fXZhciByPXt9LG49ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMuZXZhbHVhdGVSZXN1bHQ9cix0aGlzLmNvbnRleHQ9ZS50YXJnZXQsdGhpcy5jb21wdXRlRm49ZS5ldmFsdWF0ZSx0aGlzLnJlc2V0VGVzdGVyPWUucmVzZXRUZXN0ZXJzfXJldHVybiBlLnByb3RvdHlwZS5yZWxlYXNlPWZ1bmN0aW9uKCl7dGhpcy5yZXNldCh0KX0sZS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oZSl7dGhpcy5ldmFsdWF0ZVJlc3VsdD1yLHRoaXMuY29tcHV0ZUZuPWV8fHRoaXMuY29tcHV0ZUZufSxlLnByb3RvdHlwZS5ldmFsdWF0ZT1mdW5jdGlvbigpe3RoaXMuaXNQcmVzZW50KCkmJiF0aGlzLm5lZWRSZXNldCgpfHwodGhpcy5ldmFsdWF0ZVJlc3VsdD10aGlzLmNvbXB1dGVGbi5jYWxsKHRoaXMuY29udGV4dCx0aGlzLmNvbnRleHQpKX0sZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXZhbHVhdGUoKSx0aGlzLmV2YWx1YXRlUmVzdWx0fSxlLnByb3RvdHlwZS5pc1ByZXNlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ldmFsdWF0ZVJlc3VsdCE9PXJ9LGUucHJvdG90eXBlLm5lZWRSZXNldD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMucmVzZXRUZXN0ZXIuc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIHQoZS5jb250ZXh0KX0pKX0sZX0oKTtmdW5jdGlvbiBvKHQscixvKXt2YXIgdTt1PVwiZnVuY3Rpb25cIj09dHlwZW9mIG8/e2V2YWx1YXRlOm99OmUoe30sbyk7dmFyIGE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHIpO2lmKGEmJiFhLmNvbmZpZ3VyYWJsZSl0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgb3ZlcnJpZGUgb3ZlcnJpZGUgcHJvcGVydHk6IFwiK1N0cmluZyhyKSk7dmFyIGk9XCJib29sZWFuXCI9PXR5cGVvZiB1LmVudW1lcmFibGU/dS5lbnVtZXJhYmxlOihudWxsPT1hP3ZvaWQgMDphLmVudW1lcmFibGUpfHwhMCxzPXUucmVzZXRCeXx8W10sbD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQscixvKXtlLl9fbGF6eV9ffHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fbGF6eV9fXCIse3ZhbHVlOnt9LGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITEsY29uZmlndXJhYmxlOiExfSk7dmFyIHU9ZS5fX2xhenlfXztpZighdVt0XSl7dmFyIGE9by5tYXAoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZXx8XCJzeW1ib2xcIj09dHlwZW9mIGU/ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIGZ1bmN0aW9uKHIpe3ZhciBuPXJbZV0sbz1uIT09dDtyZXR1cm4gdD1uLG99fShlKToodD1lLGZ1bmN0aW9uKGUpe3ZhciBuPXQoZSksbz1uIT09cjtyZXR1cm4gcj1uLG99KTt2YXIgdCxyfSkpO3VbdF09bmV3IG4oe3RhcmdldDplLGV2YWx1YXRlOnIscmVzZXRUZXN0ZXJzOmF9KX1yZXR1cm4gdVt0XX0odGhpcyxyLHUuZXZhbHVhdGUscyl9O3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTppLGdldDpmdW5jdGlvbigpe3JldHVybiBsLmNhbGwodGhpcykuZ2V0KCl9fSksbH1mdW5jdGlvbiB1KGUsdCxyKXtyZXR1cm4gbyhlLHQscikuY2FsbChlKX1leHBvcnRzLmxhenlNZW1iZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQscil7byh0LHIsZSl9fSxleHBvcnRzLmxhenlNZW1iZXJPZkNsYXNzPWZ1bmN0aW9uKGUsdCxyKXtvKGUucHJvdG90eXBlLHQscil9LGV4cG9ydHMubGF6eVByb3A9dSxleHBvcnRzLmxhenlWYWw9ZnVuY3Rpb24oZSl7cmV0dXJuIHUoe19fdmFsX186bnVsbH0sXCJfX3ZhbF9fXCIsZSl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguY2pzLmpzLm1hcFxuIiwiaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuaW1wb3J0IHsgQ2xhc3NNZXRhZGF0YSwgQ2xhc3NNZXRhZGF0YVJlYWRlciB9IGZyb20gJy4uL21ldGFkYXRhL0NsYXNzTWV0YWRhdGEnO1xuaW1wb3J0IHsgTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIgfSBmcm9tICcuLi9tZXRhZGF0YS9NZXRhZGF0YUluc3RhbmNlTWFuYWdlcic7XG5pbXBvcnQgeyBMaWZlY3ljbGUgfSBmcm9tICcuL0xpZmVjeWNsZSc7XG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gJy4uL3R5cGVzL0luc3RhbmNlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29udGV4dCB9IGZyb20gJy4vQXBwbGljYXRpb25Db250ZXh0JztcblxuZXhwb3J0IGNsYXNzIExpZmVjeWNsZU1hbmFnZXI8VCA9IHVua25vd24+IHtcbiAgICBwcml2YXRlIGNsYXNzTWV0YWRhdGFSZWFkZXI6IENsYXNzTWV0YWRhdGFSZWFkZXI8VD47XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRDbGFzczogTmV3YWJsZTxUPiwgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IEFwcGxpY2F0aW9uQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNsYXNzTWV0YWRhdGFSZWFkZXIgPSBNZXRhZGF0YUluc3RhbmNlTWFuYWdlci5nZXRNZXRhZGF0YSh0aGlzLmNvbXBvbmVudENsYXNzLCBDbGFzc01ldGFkYXRhKS5yZWFkZXIoKTtcbiAgICB9XG4gICAgaW52b2tlUHJlSW5qZWN0TWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZTxUPikge1xuICAgICAgICBjb25zdCBtZXRob2RzID0gdGhpcy5jbGFzc01ldGFkYXRhUmVhZGVyLmdldE1ldGhvZHMoTGlmZWN5Y2xlLlBSRV9JTkpFQ1QpO1xuICAgICAgICB0aGlzLmludm9rZUxpZmVjeWNsZU1ldGhvZHMoaW5zdGFuY2UsIG1ldGhvZHMpO1xuICAgIH1cbiAgICBpbnZva2VQb3N0SW5qZWN0TWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZTxUPikge1xuICAgICAgICBjb25zdCBtZXRob2RzID0gdGhpcy5jbGFzc01ldGFkYXRhUmVhZGVyLmdldE1ldGhvZHMoTGlmZWN5Y2xlLlBPU1RfSU5KRUNUKTtcbiAgICAgICAgdGhpcy5pbnZva2VMaWZlY3ljbGVNZXRob2RzKGluc3RhbmNlLCBtZXRob2RzKTtcbiAgICB9XG4gICAgaW52b2tlUHJlRGVzdHJveUluamVjdE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2U8VD4pIHtcbiAgICAgICAgY29uc3QgbWV0aG9kcyA9IHRoaXMuY2xhc3NNZXRhZGF0YVJlYWRlci5nZXRNZXRob2RzKExpZmVjeWNsZS5QUkVfREVTVFJPWSk7XG4gICAgICAgIHRoaXMuaW52b2tlTGlmZWN5Y2xlTWV0aG9kcyhpbnN0YW5jZSwgbWV0aG9kcyk7XG4gICAgfVxuICAgIHByaXZhdGUgaW52b2tlTGlmZWN5Y2xlTWV0aG9kcyhpbnN0YW5jZTogSW5zdGFuY2U8VD4sIG1ldGhvZEtleXM6IEFycmF5PHN0cmluZyB8IHN5bWJvbD4pIHtcbiAgICAgICAgbWV0aG9kS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbnZva2UoaW5zdGFuY2Vba2V5XSwge1xuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGluc3RhbmNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuaW1wb3J0IHsgQ2xhc3NNZXRhZGF0YSwgQ2xhc3NNZXRhZGF0YVJlYWRlciB9IGZyb20gJy4uL21ldGFkYXRhL0NsYXNzTWV0YWRhdGEnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSAnLi9BcHBsaWNhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9JbnN0YW5jZSc7XG5pbXBvcnQgeyBTZXJ2aWNlRmFjdG9yeURlZiB9IGZyb20gJy4vU2VydmljZUZhY3RvcnlEZWYnO1xuaW1wb3J0IHsgR2xvYmFsTWV0YWRhdGEgfSBmcm9tICcuLi9tZXRhZGF0YS9HbG9iYWxNZXRhZGF0YSc7XG5pbXBvcnQgeyBsYXp5UHJvcCB9IGZyb20gJ0B2Z2VyYm90L2xhenknO1xuaW1wb3J0IHsgTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIgfSBmcm9tICcuLi9tZXRhZGF0YS9NZXRhZGF0YUluc3RhbmNlTWFuYWdlcic7XG5pbXBvcnQgeyBJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyIH0gZnJvbSAnLi9JbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyJztcbmltcG9ydCB7IExpZmVjeWNsZU1hbmFnZXIgfSBmcm9tICcuL0xpZmVjeWNsZU1hbmFnZXInO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SW5zdGFuY2VCdWlsZGVyPFQ+IHtcbiAgICBwcml2YXRlIGdldENvbnN0cnVjdG9yQXJnczogKCkgPT4gdW5rbm93bltdID0gKCkgPT4gW107XG4gICAgcHJpdmF0ZSBwcm9wZXJ0eUZhY3RvcmllczogUmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgU2VydmljZUZhY3RvcnlEZWY8dW5rbm93bj4+ID0ge307XG4gICAgcHJpdmF0ZSBsYXp5TW9kZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBsaWZlY3ljbGVSZXNvbHZlcjogTGlmZWN5Y2xlTWFuYWdlcjxUPjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRDbGFzczogTmV3YWJsZTxUPixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IEFwcGxpY2F0aW9uQ29udGV4dCxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBpbnN0QXdhcmVQcm9jZXNzb3JNYW5hZ2VyOiBJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHRoaXMubGlmZWN5Y2xlUmVzb2x2ZXIgPSBuZXcgTGlmZWN5Y2xlTWFuYWdlcjxUPihjb21wb25lbnRDbGFzcywgY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEoY29tcG9uZW50Q2xhc3MsIENsYXNzTWV0YWRhdGEpLnJlYWRlcigpO1xuICAgICAgICB0aGlzLmFwcGVuZENsYXNzTWV0YWRhdGEocmVhZGVyKTtcbiAgICB9XG4gICAgYXBwZW5kTGF6eU1vZGUobGF6eU1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5sYXp5TW9kZSA9IGxhenlNb2RlO1xuICAgIH1cbiAgICBwcml2YXRlIGFwcGVuZENsYXNzTWV0YWRhdGE8VD4oY2xhc3NNZXRhZGF0YVJlYWRlcjogQ2xhc3NNZXRhZGF0YVJlYWRlcjxUPikge1xuICAgICAgICBjb25zdCB0eXBlcyA9IGNsYXNzTWV0YWRhdGFSZWFkZXIuZ2V0Q29uc3RydWN0b3JQYXJhbWV0ZXJUeXBlcygpO1xuICAgICAgICB0aGlzLmdldENvbnN0cnVjdG9yQXJncyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5tYXAoaXQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRJbnN0YW5jZShpdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZ2xvYmFsTWV0YWRhdGFSZWFkZXIgPSBHbG9iYWxNZXRhZGF0YS5nZXRJbnN0YW5jZSgpLnJlYWRlcigpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gY2xhc3NNZXRhZGF0YVJlYWRlci5nZXRQcm9wZXJ0eVR5cGVNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBbcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVR5cGVdIG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUZhY3Rvcmllc1twcm9wZXJ0eU5hbWVdID0gbmV3IFNlcnZpY2VGYWN0b3J5RGVmKChjb250YWluZXIsIG93bmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjb250YWluZXIuZ2V0SW5zdGFuY2UocHJvcGVydHlUeXBlLCBvd25lcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb250YWluZXIuZ2V0RmFjdG9yeShwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5RmFjdG9yaWVzW3Byb3BlcnR5TmFtZV0gPSBmYWN0b3J5O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDbGFzc01ldGFkYXRhID0gZ2xvYmFsTWV0YWRhdGFSZWFkZXIuZ2V0Q2xhc3NNZXRhZGF0YShwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5Q2xhc3NNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHlGYWN0b3JpZXNbcHJvcGVydHlOYW1lXSA9IFNlcnZpY2VGYWN0b3J5RGVmLmNyZWF0ZUZyb21DbGFzc01ldGFkYXRhKHByb3BlcnR5Q2xhc3NNZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eUZhY3RvcnkgPSBnbG9iYWxNZXRhZGF0YVJlYWRlci5nZXRDb21wb25lbnRGYWN0b3J5KHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICBpZiAocHJvcGVydHlGYWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUZhY3Rvcmllc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydHlGYWN0b3J5O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5nZXRDb25zdHJ1Y3RvckFyZ3MoKTtcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuY3JlYXRlUHJvcGVydGllc0dldHRlckJ1aWxkZXIoKTtcbiAgICAgICAgY29uc3QgaXNDcmVhdGluZ0luc3RBd2FyZVByb2Nlc3NvciA9IHRoaXMuaW5zdEF3YXJlUHJvY2Vzc29yTWFuYWdlci5pc0luc3RBd2FyZVByb2Nlc3NvckNsYXNzKHRoaXMuY29tcG9uZW50Q2xhc3MpO1xuICAgICAgICBpZiAoaXNDcmVhdGluZ0luc3RBd2FyZVByb2Nlc3Nvcikge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy5jb21wb25lbnRDbGFzcyguLi5hcmdzKSBhcyBJbnN0YW5jZTxUPjtcbiAgICAgICAgICAgIHRoaXMubGlmZWN5Y2xlUmVzb2x2ZXIuaW52b2tlUHJlSW5qZWN0TWV0aG9kKGluc3RhbmNlKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0aWVzW2tleV0oaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwgZ2V0dGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGlmZWN5Y2xlUmVzb2x2ZXIuaW52b2tlUG9zdEluamVjdE1ldGhvZChpbnN0YW5jZSk7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW5zdGFuY2U6IHVuZGVmaW5lZCB8IEluc3RhbmNlPFQ+ID0gdGhpcy5pbnN0QXdhcmVQcm9jZXNzb3JNYW5hZ2VyLmJlZm9yZUluc3RhbnRpYXRpb24odGhpcy5jb21wb25lbnRDbGFzcywgYXJncyk7XG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgdGhpcy5jb21wb25lbnRDbGFzcyguLi5hcmdzKSBhcyBJbnN0YW5jZTxUPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGlmZWN5Y2xlUmVzb2x2ZXIuaW52b2tlUHJlSW5qZWN0TWV0aG9kKGluc3RhbmNlKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0aWVzW2tleV0oaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwgZ2V0dGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5pbnN0QXdhcmVQcm9jZXNzb3JNYW5hZ2VyLmFmdGVySW5zdGFudGlhdGlvbihpbnN0YW5jZSk7XG4gICAgICAgICAgICB0aGlzLmxpZmVjeWNsZVJlc29sdmVyLmludm9rZVBvc3RJbmplY3RNZXRob2QoaW5zdGFuY2UpO1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZGVmaW5lUHJvcGVydHk8VCwgVj4oaW5zdGFuY2U6IFQsIGtleTogc3RyaW5nIHwgc3ltYm9sLCBnZXR0ZXI6ICgpID0+IFYpIHtcbiAgICAgICAgaWYgKHRoaXMubGF6eU1vZGUpIHtcbiAgICAgICAgICAgIGxhenlQcm9wKGluc3RhbmNlLCBrZXksIGdldHRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gZ2V0dGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0aWVzR2V0dGVyQnVpbGRlcigpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge30gYXMgUmVjb3JkPGtleW9mIFQsIChpbnN0YW5jZTogVCkgPT4gKCkgPT4gdW5rbm93bj47XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucHJvcGVydHlGYWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmFjdG9yeSwgaW5qZWN0aW9ucyB9ID0gdGhpcy5wcm9wZXJ0eUZhY3Rvcmllc1trZXldO1xuICAgICAgICAgICAgcmVzdWx0W2tleSBhcyBrZXlvZiBUXSA9IDxUPihpbnN0YW5jZTogVCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZuID0gZmFjdG9yeSh0aGlzLmNvbnRhaW5lciwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5pbnZva2UoZm4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuLi90eXBlcy9NZXRhZGF0YSc7XG5pbXBvcnQgeyBJZGVudGlmaWVyIH0gZnJvbSAnLi4vdHlwZXMvSWRlbnRpZmllcic7XG5pbXBvcnQgeyBJbnN0YW5jZVNjb3BlIH0gZnJvbSAnLi4vZm91bmRhdGlvbi9JbnN0YW5jZVNjb3BlJztcblxuZXhwb3J0IGNvbnN0IEZVTkNUSU9OX01FVEFEQVRBX0tFWSA9IFN5bWJvbCgnaW9jOmZ1bmN0aW9uLW1ldGFkYXRhJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3Rpb25NZXRhZGF0YVJlYWRlciB7XG4gICAgZ2V0UGFyYW1ldGVycygpOiBJZGVudGlmaWVyW107XG4gICAgaXNGYWN0b3J5KCk6IGJvb2xlYW47XG4gICAgZ2V0U2NvcGUoKTogSW5zdGFuY2VTY29wZSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uTWV0YWRhdGEgaW1wbGVtZW50cyBNZXRhZGF0YTxGdW5jdGlvbk1ldGFkYXRhUmVhZGVyLCBGdW5jdGlvbj4ge1xuICAgIHN0YXRpYyBnZXRSZWZsZWN0S2V5KCkge1xuICAgICAgICByZXR1cm4gRlVOQ1RJT05fTUVUQURBVEFfS0VZO1xuICAgIH1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmFtZXRlcnM6IElkZW50aWZpZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgc2NvcGU/OiBJbnN0YW5jZVNjb3BlO1xuICAgIHByaXZhdGUgaXNGYWN0b3J5OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2V0UGFyYW1ldGVyVHlwZShpbmRleDogbnVtYmVyLCBzeW1ib2w6IElkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzW2luZGV4XSA9IHN5bWJvbDtcbiAgICB9XG4gICAgc2V0U2NvcGUoc2NvcGU6IEluc3RhbmNlU2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBzZXRJc0ZhY3RvcnkoaXNGYWN0b3J5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGYWN0b3J5ID0gaXNGYWN0b3J5O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBQQVNTO1xuICAgIH1cbiAgICByZWFkZXIoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRQYXJhbWV0ZXJzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5zbGljZSgwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0ZhY3Rvcnk6ICgpID0+IHRoaXMuaXNGYWN0b3J5LFxuICAgICAgICAgICAgZ2V0U2NvcGU6ICgpID0+IHRoaXMuc2NvcGVcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJsZXQgaW5zdGFuY2VTZXJpYWxObyA9IC0xO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SW5zdGFuY2VXcmFwcGVyIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2VyaWFsTm8gPSArK2luc3RhbmNlU2VyaWFsTm87XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgaW5zdGFuY2U6IHVua25vd24pIHt9XG5cbiAgICBwdWJsaWMgY29tcGFyZVRvKG90aGVyOiBDb21wb25lbnRJbnN0YW5jZVdyYXBwZXIpOiAtMSB8IDAgfCAxIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsTm8gPiBvdGhlci5zZXJpYWxObyA/IC0xIDogdGhpcy5zZXJpYWxObyA8IG90aGVyLnNlcmlhbE5vID8gMSA6IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIgfSBmcm9tICcuLi9tZXRhZGF0YS9NZXRhZGF0YUluc3RhbmNlTWFuYWdlcic7XG5pbXBvcnQgeyBDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEvQ2xhc3NNZXRhZGF0YSc7XG5pbXBvcnQgeyBMaWZlY3ljbGUgfSBmcm9tICcuLi9mb3VuZGF0aW9uL0xpZmVjeWNsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VQcmVEZXN0cm95KGluc3RhbmNlOiB1bmtub3duKSB7XG4gICAgY29uc3QgY2xhenogPSBpbnN0YW5jZT8uY29uc3RydWN0b3I7XG4gICAgaWYgKCFjbGF6eikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEoY2xhenosIENsYXNzTWV0YWRhdGEpO1xuICAgIGNvbnN0IHByZURlc3Ryb3lNZXRob2RzID0gbWV0YWRhdGEuZ2V0TWV0aG9kcyhMaWZlY3ljbGUuUFJFX0RFU1RST1kpO1xuICAgIHByZURlc3Ryb3lNZXRob2RzLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGNsYXp6LnByb3RvdHlwZVttZXRob2ROYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG1ldGhvZC5hcHBseShpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IEdldEluc3RhbmNlT3B0aW9ucywgSW5zdGFuY2VSZXNvbHV0aW9uLCBTYXZlSW5zdGFuY2VPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvSW5zdGFuY2VSZXNvbHV0aW9uJztcbmltcG9ydCB7IElkZW50aWZpZXIgfSBmcm9tICcuLi90eXBlcy9JZGVudGlmaWVyJztcbmltcG9ydCB7IENvbXBvbmVudEluc3RhbmNlV3JhcHBlciB9IGZyb20gJy4uL2ZvdW5kYXRpb24vQ29tcG9uZW50SW5zdGFuY2VXcmFwcGVyJztcbmltcG9ydCB7IGludm9rZVByZURlc3Ryb3kgfSBmcm9tICcuLi9jb21tb24vaW52b2tlUHJlRGVzdHJveSc7XG5cbmV4cG9ydCBjbGFzcyBTaW5nbGV0b25JbnN0YW5jZVJlc29sdXRpb24gaW1wbGVtZW50cyBJbnN0YW5jZVJlc29sdXRpb24ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgSU5TVEFOQ0VfTUFQID0gbmV3IE1hcDxJZGVudGlmaWVyLCBDb21wb25lbnRJbnN0YW5jZVdyYXBwZXI+KCk7XG4gICAgZ2V0SW5zdGFuY2U8VCwgTz4ob3B0aW9uczogR2V0SW5zdGFuY2VPcHRpb25zPFQsIE8+KTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLklOU1RBTkNFX01BUC5nZXQob3B0aW9ucy5pZGVudGlmaWVyKT8uaW5zdGFuY2UgYXMgVDtcbiAgICB9XG5cbiAgICBzYXZlSW5zdGFuY2U8VCwgTz4ob3B0aW9uczogU2F2ZUluc3RhbmNlT3B0aW9uczxULCBPPik6IHZvaWQge1xuICAgICAgICB0aGlzLklOU1RBTkNFX01BUC5zZXQob3B0aW9ucy5pZGVudGlmaWVyLCBuZXcgQ29tcG9uZW50SW5zdGFuY2VXcmFwcGVyKG9wdGlvbnMuaW5zdGFuY2UpKTtcbiAgICB9XG5cbiAgICBzaG91bGRHZW5lcmF0ZTxULCBPPihvcHRpb25zOiBHZXRJbnN0YW5jZU9wdGlvbnM8VCwgTz4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLklOU1RBTkNFX01BUC5oYXMob3B0aW9ucy5pZGVudGlmaWVyKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VXcmFwcGVycyA9IEFycmF5LmZyb20odGhpcy5JTlNUQU5DRV9NQVAudmFsdWVzKCkpO1xuICAgICAgICBpbnN0YW5jZVdyYXBwZXJzLnNvcnQoKGEsIGIpID0+IGEuY29tcGFyZVRvKGIpKTtcbiAgICAgICAgaW5zdGFuY2VXcmFwcGVycy5mb3JFYWNoKGluc3RhbmNlV3JhcHBlciA9PiB7XG4gICAgICAgICAgICBpbnZva2VQcmVEZXN0cm95KGluc3RhbmNlV3JhcHBlci5pbnN0YW5jZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLklOU1RBTkNFX01BUC5jbGVhcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEdldEluc3RhbmNlT3B0aW9ucywgSW5zdGFuY2VSZXNvbHV0aW9uLCBTYXZlSW5zdGFuY2VPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvSW5zdGFuY2VSZXNvbHV0aW9uJztcbmltcG9ydCB7IFNpbmdsZXRvbkluc3RhbmNlUmVzb2x1dGlvbiB9IGZyb20gJy4vU2luZ2xldG9uSW5zdGFuY2VSZXNvbHV0aW9uJztcblxuY29uc3QgU0lOR0xFVE9OX0lOU1RBTkNFX1NJTkdMRVRPTiA9IG5ldyBTaW5nbGV0b25JbnN0YW5jZVJlc29sdXRpb24oKTtcblxuZXhwb3J0IGNsYXNzIEdsb2JhbFNoYXJlZEluc3RhbmNlUmVzb2x1dGlvbiBpbXBsZW1lbnRzIEluc3RhbmNlUmVzb2x1dGlvbiB7XG4gICAgZ2V0SW5zdGFuY2U8VCwgTz4ob3B0aW9uczogR2V0SW5zdGFuY2VPcHRpb25zPFQsIE8+KTogVCB7XG4gICAgICAgIHJldHVybiBTSU5HTEVUT05fSU5TVEFOQ0VfU0lOR0xFVE9OLmdldEluc3RhbmNlKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHNhdmVJbnN0YW5jZTxULCBPPihvcHRpb25zOiBTYXZlSW5zdGFuY2VPcHRpb25zPFQsIE8+KTogdm9pZCB7XG4gICAgICAgIFNJTkdMRVRPTl9JTlNUQU5DRV9TSU5HTEVUT04uc2F2ZUluc3RhbmNlKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHNob3VsZEdlbmVyYXRlPFQsIE8+KG9wdGlvbnM6IEdldEluc3RhbmNlT3B0aW9uczxULCBPPik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gU0lOR0xFVE9OX0lOU1RBTkNFX1NJTkdMRVRPTi5zaG91bGRHZW5lcmF0ZShvcHRpb25zKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gUEFTUztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbnN0YW5jZVJlc29sdXRpb24sIFNhdmVJbnN0YW5jZU9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9JbnN0YW5jZVJlc29sdXRpb24nO1xuaW1wb3J0IHsgaW52b2tlUHJlRGVzdHJveSB9IGZyb20gJy4uL2NvbW1vbi9pbnZva2VQcmVEZXN0cm95JztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaWVudEluc3RhbmNlUmVzb2x1dGlvbiBpbXBsZW1lbnRzIEluc3RhbmNlUmVzb2x1dGlvbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBpbnN0YW5jZXMgPSBuZXcgU2V0PHVua25vd24+KCk7XG4gICAgc2hvdWxkR2VuZXJhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldEluc3RhbmNlPFQ+KCk6IFQgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2F2ZUluc3RhbmNlPFQsIE8+KG9wdGlvbnM6IFNhdmVJbnN0YW5jZU9wdGlvbnM8VCwgTz4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuYWRkKG9wdGlvbnMuaW5zdGFuY2UpO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKGl0ID0+IHtcbiAgICAgICAgICAgIGlmICghaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnZva2VQcmVEZXN0cm95KGl0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vdHlwZXMvRXZhbHVhdG9yJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29udGV4dCB9IGZyb20gJy4uL2ZvdW5kYXRpb24vQXBwbGljYXRpb25Db250ZXh0JztcbmltcG9ydCB7IEpTT05EYXRhIH0gZnJvbSAnLi4vdHlwZXMvSlNPTkRhdGEnO1xuXG5leHBvcnQgY2xhc3MgSlNPTkRhdGFFdmFsdWF0b3IgaW1wbGVtZW50cyBFdmFsdWF0b3Ige1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZXNwYWNlRGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBKU09ORGF0YT4oKTtcbiAgICBldmFsPFQ+KGNvbnRleHQ6IEFwcGxpY2F0aW9uQ29udGV4dCwgZXhwcmVzc2lvbjogc3RyaW5nKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGNvbG9uSW5kZXggPSBleHByZXNzaW9uLmluZGV4T2YoJzonKTtcbiAgICAgICAgaWYgKGNvbG9uSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBleHByZXNzaW9uLCBuYW1lc3BhY2Ugbm90IHNwZWNpZmllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVzcGFjZSA9IGV4cHJlc3Npb24uc3Vic3RyaW5nKDAsIGNvbG9uSW5kZXgpO1xuICAgICAgICBjb25zdCBleHAgPSBleHByZXNzaW9uLnN1YnN0cmluZyhjb2xvbkluZGV4ICsgMSk7XG4gICAgICAgIGlmICghdGhpcy5uYW1lc3BhY2VEYXRhTWFwLmhhcyhuYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluY29ycmVjdCBleHByZXNzaW9uOiBuYW1lc3BhY2Ugbm90IHJlY29yZGVkOiBcIiR7bmFtZXNwYWNlfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubmFtZXNwYWNlRGF0YU1hcC5nZXQobmFtZXNwYWNlKSBhcyBKU09ORGF0YTtcbiAgICAgICAgcmV0dXJuIHJ1bkV4cHJlc3Npb24oZXhwLCBkYXRhIGFzIE9iamVjdCk7XG4gICAgfVxuICAgIHJlY29yZERhdGEobmFtZXNwYWNlOiBzdHJpbmcsIGRhdGE6IEpTT05EYXRhKSB7XG4gICAgICAgIHRoaXMubmFtZXNwYWNlRGF0YU1hcC5zZXQobmFtZXNwYWNlLCBkYXRhKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkV4cHJlc3Npb24oZXhwcmVzc2lvbjogc3RyaW5nLCByb290Q29udGV4dDogT2JqZWN0KSB7XG4gICAgY29uc3QgZm4gPSBjb21waWxlRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICByZXR1cm4gZm4ocm9vdENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBjb21waWxlRXhwcmVzc2lvbihleHByZXNzaW9uOiBzdHJpbmcpIHtcbiAgICBpZiAoZXhwcmVzc2lvbi5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluY29ycmVjdCBleHByZXNzaW9uIHN5bnRheCwgVGhlICcsJyBpcyBub3QgYWxsb3dlZCBpbiBleHByZXNzaW9uOiBcIiR7ZXhwcmVzc2lvbn1cImApO1xuICAgIH1cbiAgICBpZiAoZXhwcmVzc2lvbi5sZW5ndGggPiAxMjApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEluY29ycmVjdCBleHByZXNzaW9uIHN5bnRheCwgZXhwcmVzc2lvbiBsZW5ndGggY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAxMjAsIGJ1dCBhY3R1YWw6ICR7ZXhwcmVzc2lvbi5sZW5ndGh9YFxuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoL1xcKC4qP1xcKS8udGVzdChleHByZXNzaW9uKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluY29ycmVjdCBleHByZXNzaW9uIHN5bnRheCwgcGFyZW50aGVzZXMgYXJlIG5vdCBhbGxvd2VkIGluIGV4cHJlc3Npb246IFwiJHtleHByZXNzaW9ufVwiYCk7XG4gICAgfVxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnRyaW0oKTtcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIChyb290OiBPYmplY3QpID0+IHJvb3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdFZhck5hbWUgPSB2YXJOYW1lKCdjb250ZXh0Jyk7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcbiAgICAgICAgcm9vdFZhck5hbWUsXG4gICAgICAgIGBcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gJHtyb290VmFyTmFtZX0uJHtleHByZXNzaW9ufTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikgeyB0aHJvdyBlcnJvciB9XG4gICAgYFxuICAgICk7XG59XG5sZXQgVkFSX1NFUVVFTkNFID0gRGF0ZS5ub3coKTtcbmZ1bmN0aW9uIHZhck5hbWUocHJlZml4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJycgKyAoVkFSX1NFUVVFTkNFKyspLnRvU3RyaW5nKDE2KTtcbn1cbiIsImltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL3R5cGVzL0V2YWx1YXRvcic7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHQgfSBmcm9tICcuLi9mb3VuZGF0aW9uL0FwcGxpY2F0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudEV2YWx1YXRvciBpbXBsZW1lbnRzIEV2YWx1YXRvciB7XG4gICAgZXZhbDxUPihjb250ZXh0OiBBcHBsaWNhdGlvbkNvbnRleHQsIGV4cHJlc3Npb246IHN0cmluZyk6IFQgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnZbZXhwcmVzc2lvbl0gYXMgVCB8IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFdmFsdWF0b3IgfSBmcm9tICcuLi90eXBlcy9FdmFsdWF0b3InO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSAnLi4vZm91bmRhdGlvbi9BcHBsaWNhdGlvbkNvbnRleHQnO1xuXG5leHBvcnQgY2xhc3MgQXJndkV2YWx1YXRvciBpbXBsZW1lbnRzIEV2YWx1YXRvciB7XG4gICAgZXZhbDxULCBBID0gc3RyaW5nW10+KGNvbnRleHQ6IEFwcGxpY2F0aW9uQ29udGV4dCwgZXhwcmVzc2lvbjogc3RyaW5nLCBhcmdzPzogQSk6IFQgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBhcmd2ID0gYXJncyB8fCBwcm9jZXNzLmFyZ3Y7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG4gICAgICAgIGNvbnN0IG1pbmltaXN0ID0gcmVxdWlyZSgnbWluaW1pc3QnKTtcbiAgICAgICAgY29uc3QgbWFwID0gbWluaW1pc3QoYXJndik7XG4gICAgICAgIHJldHVybiBtYXBbZXhwcmVzc2lvbl07XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gQWR2aWNlIHtcbiAgICBCZWZvcmUsXG4gICAgQWZ0ZXIsXG4gICAgQXJvdW5kLFxuICAgIEFmdGVyUmV0dXJuLFxuICAgIFRocm93bixcbiAgICBGaW5hbGx5XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBBZHZpY2UgfSBmcm9tICcuL0FkdmljZSc7XG5cbnR5cGUgQmVmb3JlSG9vayA9IChhcmdzOiBhbnlbXSkgPT4gdm9pZDtcbnR5cGUgQWZ0ZXJIb29rID0gKGFyZ3M6IGFueVtdKSA9PiB2b2lkO1xudHlwZSBUaHJvd25Ib29rID0gKHJlYXNvbjogYW55LCBhcmdzOiBhbnlbXSkgPT4gdm9pZDtcbnR5cGUgRmluYWxseUhvb2sgPSAoYXJnczogYW55W10pID0+IHZvaWQ7XG50eXBlIEFmdGVyUmV0dXJuSG9vayA9IChyZXR1cm5WYWx1ZTogYW55LCBhcmdzOiBhbnlbXSkgPT4gYW55O1xudHlwZSBBcm91bmRIb29rID0gKHRoaXM6IGFueSwgb3JpZ2luZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgYXJnczogYW55W10pID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBBc3BlY3RVdGlscyB7XG4gICAgcHJpdmF0ZSBiZWZvcmVIb29rczogQXJyYXk8QmVmb3JlSG9vaz4gPSBbXTtcbiAgICBwcml2YXRlIGFmdGVySG9va3M6IEFycmF5PEFmdGVySG9vaz4gPSBbXTtcbiAgICBwcml2YXRlIHRocm93bkhvb2tzOiBBcnJheTxUaHJvd25Ib29rPiA9IFtdO1xuICAgIHByaXZhdGUgZmluYWxseUhvb2tzOiBBcnJheTxGaW5hbGx5SG9vaz4gPSBbXTtcbiAgICBwcml2YXRlIGFmdGVyUmV0dXJuSG9va3M6IEFycmF5PEFmdGVyUmV0dXJuSG9vaz4gPSBbXTtcbiAgICBwcml2YXRlIGFyb3VuZEhvb2tzOiBBcnJheTxBcm91bmRIb29rPiA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSB7fVxuICAgIGFwcGVuZChhZHZpY2U6IEFkdmljZS5CZWZvcmUsIGhvb2s6IEJlZm9yZUhvb2spOiB2b2lkO1xuICAgIGFwcGVuZChhZHZpY2U6IEFkdmljZS5BZnRlciwgaG9vazogQWZ0ZXJIb29rKTogdm9pZDtcbiAgICBhcHBlbmQoYWR2aWNlOiBBZHZpY2UuVGhyb3duLCBob29rOiBUaHJvd25Ib29rKTogdm9pZDtcbiAgICBhcHBlbmQoYWR2aWNlOiBBZHZpY2UuRmluYWxseSwgaG9vazogRmluYWxseUhvb2spOiB2b2lkO1xuICAgIGFwcGVuZChhZHZpY2U6IEFkdmljZS5BZnRlclJldHVybiwgaG9vazogQWZ0ZXJSZXR1cm5Ib29rKTogdm9pZDtcbiAgICBhcHBlbmQoYWR2aWNlOiBBZHZpY2UuQXJvdW5kLCBob29rOiBBcm91bmRIb29rKTogdm9pZDtcbiAgICBhcHBlbmQoYWR2aWNlOiBBZHZpY2UsIGhvb2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBob29rc0FycmF5OiBGdW5jdGlvbltdIHwgdW5kZWZpbmVkO1xuICAgICAgICBzd2l0Y2ggKGFkdmljZSkge1xuICAgICAgICAgICAgY2FzZSBBZHZpY2UuQmVmb3JlOlxuICAgICAgICAgICAgICAgIGhvb2tzQXJyYXkgPSB0aGlzLmJlZm9yZUhvb2tzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBZHZpY2UuQWZ0ZXI6XG4gICAgICAgICAgICAgICAgaG9va3NBcnJheSA9IHRoaXMuYWZ0ZXJIb29rcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWR2aWNlLlRocm93bjpcbiAgICAgICAgICAgICAgICBob29rc0FycmF5ID0gdGhpcy50aHJvd25Ib29rcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWR2aWNlLkZpbmFsbHk6XG4gICAgICAgICAgICAgICAgaG9va3NBcnJheSA9IHRoaXMuZmluYWxseUhvb2tzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBZHZpY2UuQWZ0ZXJSZXR1cm46XG4gICAgICAgICAgICAgICAgaG9va3NBcnJheSA9IHRoaXMuYWZ0ZXJSZXR1cm5Ib29rcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWR2aWNlLkFyb3VuZDpcbiAgICAgICAgICAgICAgICBob29rc0FycmF5ID0gdGhpcy5hcm91bmRIb29rcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9va3NBcnJheSkge1xuICAgICAgICAgICAgaG9va3NBcnJheS5wdXNoKGhvb2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4dHJhY3QoKSB7XG4gICAgICAgIGNvbnN0IHsgYXJvdW5kSG9va3MsIGJlZm9yZUhvb2tzLCBhZnRlckhvb2tzLCBhZnRlclJldHVybkhvb2tzLCBmaW5hbGx5SG9va3MsIHRocm93bkhvb2tzIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBmbiA9IGFyb3VuZEhvb2tzLnJlZHVjZVJpZ2h0KChwcmV2LCBuZXh0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5jYWxsKHRoaXMsIHByZXYsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgdGhpcy5mbikgYXMgdHlwZW9mIHRoaXMuZm47XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhpczogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgYmVmb3JlSG9va3MuZm9yRWFjaChob29rID0+IHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGludm9rZSA9IChvbkVycm9yOiAocmVhc29uOiBhbnkpID0+IHZvaWQsIG9uRmluYWxseTogKCkgPT4gdm9pZCwgb25BZnRlcjogKHJldHVyblZhbHVlOiBhbnkpID0+IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZTogYW55O1xuICAgICAgICAgICAgICAgIGxldCBpc1Byb21pc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Byb21pc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZS5jYXRjaChvbkVycm9yKS5maW5hbGx5KG9uRmluYWxseSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5hbGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWUudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uQWZ0ZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25BZnRlcihyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBpbnZva2UoXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhyb3duSG9va3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3duSG9va3MuZm9yRWFjaChob29rID0+IGhvb2suY2FsbCh0aGlzLCBlcnJvciwgYXJncykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxseUhvb2tzLmZvckVhY2goaG9vayA9PiBob29rLmNhbGwodGhpcywgYXJncykpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhZnRlckhvb2tzLmZvckVhY2goaG9vayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob29rLmNhbGwodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWZ0ZXJSZXR1cm5Ib29rcy5yZWR1Y2UoKHJldFZhbCwgaG9vaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvb2suY2FsbCh0aGlzLCByZXRWYWwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgdHlwZSB7IEFwcGxpY2F0aW9uQ29udGV4dCB9IGZyb20gJy4uL2ZvdW5kYXRpb24vQXBwbGljYXRpb25Db250ZXh0JztcbmltcG9ydCB7IEFkdmljZSB9IGZyb20gJy4vQWR2aWNlJztcbmltcG9ydCB7IE5ld2FibGUgfSBmcm9tICcuLi90eXBlcy9OZXdhYmxlJztcbmltcG9ydCB7IEFzcGVjdCwgSm9pblBvaW50LCBQcm9jZWVkaW5nSm9pblBvaW50IH0gZnJvbSAnLi9Bc3BlY3QnO1xuaW1wb3J0IHsgQXNwZWN0VXRpbHMgfSBmcm9tICcuL0FzcGVjdFV0aWxzJztcbmltcG9ydCB7IFVzZUFzcGVjdE1ldGFkYXRhUmVhZGVyIH0gZnJvbSAnLi9BT1BDbGFzc01ldGFkYXRhJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFzcGVjdDxUPihcbiAgICBhcHBDdHg6IEFwcGxpY2F0aW9uQ29udGV4dCxcbiAgICB0YXJnZXQ6IFQsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sLFxuICAgIG1ldGhvZEZ1bmM6IEZ1bmN0aW9uLFxuICAgIG1ldGFkYXRhOiBVc2VBc3BlY3RNZXRhZGF0YVJlYWRlclxuKSB7XG4gICAgY29uc3QgY3JlYXRlQXNwZWN0Q3R4ID0gKGFkdmljZTogQWR2aWNlLCBhcmdzOiBhbnlbXSwgcmV0dXJuVmFsdWU6IGFueSA9IG51bGwsIGVycm9yOiBhbnkgPSBudWxsKTogSm9pblBvaW50ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSxcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgYWR2aWNlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBhc3BlY3RVdGlscyA9IG5ldyBBc3BlY3RVdGlscyhtZXRob2RGdW5jIGFzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KTtcbiAgICBjb25zdCBDbGFzc1RvSW5zdGFuY2UgPSAoQXNwZWN0Q2xhc3M6IE5ld2FibGU8QXNwZWN0PikgPT4gYXBwQ3R4LmdldEluc3RhbmNlKEFzcGVjdENsYXNzKTtcbiAgICBjb25zdCBiZWZvcmVBZHZpY2VBc3BlY3RzID0gbWV0YWRhdGEuZ2V0QXNwZWN0c09mKG1ldGhvZE5hbWUsIEFkdmljZS5CZWZvcmUpLm1hcChDbGFzc1RvSW5zdGFuY2UpO1xuICAgIGNvbnN0IGFmdGVyQWR2aWNlQXNwZWN0cyA9IG1ldGFkYXRhLmdldEFzcGVjdHNPZihtZXRob2ROYW1lLCBBZHZpY2UuQWZ0ZXIpLm1hcChDbGFzc1RvSW5zdGFuY2UpO1xuICAgIGNvbnN0IHRyeUNhdGNoQWR2aWNlQXNwZWN0cyA9IG1ldGFkYXRhLmdldEFzcGVjdHNPZihtZXRob2ROYW1lLCBBZHZpY2UuVGhyb3duKS5tYXAoQ2xhc3NUb0luc3RhbmNlKTtcbiAgICBjb25zdCB0cnlGaW5hbGx5QWR2aWNlQXNwZWN0cyA9IG1ldGFkYXRhLmdldEFzcGVjdHNPZihtZXRob2ROYW1lLCBBZHZpY2UuRmluYWxseSkubWFwKENsYXNzVG9JbnN0YW5jZSk7XG4gICAgY29uc3QgYWZ0ZXJSZXR1cm5BZHZpY2VBc3BlY3RzID0gbWV0YWRhdGEuZ2V0QXNwZWN0c09mKG1ldGhvZE5hbWUsIEFkdmljZS5BZnRlclJldHVybikubWFwKENsYXNzVG9JbnN0YW5jZSk7XG4gICAgY29uc3QgYXJvdW5kQWR2aWNlQXNwZWN0cyA9IG1ldGFkYXRhLmdldEFzcGVjdHNPZihtZXRob2ROYW1lLCBBZHZpY2UuQXJvdW5kKS5tYXAoQ2xhc3NUb0luc3RhbmNlKTtcblxuICAgIGlmIChiZWZvcmVBZHZpY2VBc3BlY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXNwZWN0VXRpbHMuYXBwZW5kKEFkdmljZS5CZWZvcmUsIChhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgam9pblBvaW50ID0gY3JlYXRlQXNwZWN0Q3R4KEFkdmljZS5CZWZvcmUsIGFyZ3MpO1xuICAgICAgICAgICAgYmVmb3JlQWR2aWNlQXNwZWN0cy5mb3JFYWNoKGFzcGVjdCA9PiB7XG4gICAgICAgICAgICAgICAgYXNwZWN0LmV4ZWN1dGUoam9pblBvaW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFmdGVyQWR2aWNlQXNwZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFzcGVjdFV0aWxzLmFwcGVuZChBZHZpY2UuQWZ0ZXIsIChhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgam9pblBvaW50ID0gY3JlYXRlQXNwZWN0Q3R4KEFkdmljZS5BZnRlciwgYXJncyk7XG4gICAgICAgICAgICBhZnRlckFkdmljZUFzcGVjdHMuZm9yRWFjaChhc3BlY3QgPT4ge1xuICAgICAgICAgICAgICAgIGFzcGVjdC5leGVjdXRlKGpvaW5Qb2ludCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0cnlDYXRjaEFkdmljZUFzcGVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBhc3BlY3RVdGlscy5hcHBlbmQoQWR2aWNlLlRocm93biwgKGVycm9yLCBhcmdzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqb2luUG9pbnQgPSBjcmVhdGVBc3BlY3RDdHgoQWR2aWNlLlRocm93biwgYXJncywgbnVsbCwgZXJyb3IpO1xuICAgICAgICAgICAgdHJ5Q2F0Y2hBZHZpY2VBc3BlY3RzLmZvckVhY2goYXNwZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBhc3BlY3QuZXhlY3V0ZShqb2luUG9pbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0cnlGaW5hbGx5QWR2aWNlQXNwZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFzcGVjdFV0aWxzLmFwcGVuZChBZHZpY2UuRmluYWxseSwgKGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqb2luUG9pbnQgPSBjcmVhdGVBc3BlY3RDdHgoQWR2aWNlLkZpbmFsbHksIGFyZ3MpO1xuICAgICAgICAgICAgdHJ5RmluYWxseUFkdmljZUFzcGVjdHMuZm9yRWFjaChhc3BlY3QgPT4ge1xuICAgICAgICAgICAgICAgIGFzcGVjdC5leGVjdXRlKGpvaW5Qb2ludCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFmdGVyUmV0dXJuQWR2aWNlQXNwZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFzcGVjdFV0aWxzLmFwcGVuZChBZHZpY2UuQWZ0ZXJSZXR1cm4sIChyZXR1cm5WYWx1ZSwgYXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFmdGVyUmV0dXJuQWR2aWNlQXNwZWN0cy5yZWR1Y2UoKHByZXZSZXR1cm5WYWx1ZSwgYXNwZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgam9pblBvaW50ID0gY3JlYXRlQXNwZWN0Q3R4KEFkdmljZS5BZnRlclJldHVybiwgYXJncywgcmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3BlY3QuZXhlY3V0ZShqb2luUG9pbnQpO1xuICAgICAgICAgICAgfSwgcmV0dXJuVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYXJvdW5kQWR2aWNlQXNwZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFyb3VuZEFkdmljZUFzcGVjdHMuZm9yRWFjaChhc3BlY3QgPT4ge1xuICAgICAgICAgICAgYXNwZWN0VXRpbHMuYXBwZW5kKEFkdmljZS5Bcm91bmQsIChvcmlnaW5GbiwgYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpvaW5Qb2ludCA9IGNyZWF0ZUFzcGVjdEN0eChBZHZpY2UuQXJvdW5kLCBhcmdzLCBudWxsKSBhcyBQcm9jZWVkaW5nSm9pblBvaW50O1xuICAgICAgICAgICAgICAgIGpvaW5Qb2ludC5wcm9jZWVkID0gKGpwQXJncyA9IGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbkZuKGpwQXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNwZWN0LmV4ZWN1dGUoam9pblBvaW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNwZWN0VXRpbHMuZXh0cmFjdCgpO1xufVxuIiwiaW1wb3J0IHsgTWV0YWRhdGEsIE1ldGFkYXRhUmVhZGVyIH0gZnJvbSAnLi4vdHlwZXMvTWV0YWRhdGEnO1xuaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuaW1wb3J0IHsgQXNwZWN0IH0gZnJvbSAnLi9Bc3BlY3QnO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFZhbHVlTWFwLCBEZWZhdWx0VmFsdWVNYXAgfSBmcm9tICcuLi9jb21tb24vRGVmYXVsdFZhbHVlTWFwJztcbmltcG9ydCB7IEFkdmljZSB9IGZyb20gJy4vQWR2aWNlJztcblxuZXhwb3J0IHR5cGUgVXNlQXNwZWN0TWFwID0gRGVmYXVsdFZhbHVlTWFwPHN0cmluZyB8IHN5bWJvbCwgRGVmYXVsdFZhbHVlTWFwPEFkdmljZSwgQXJyYXk8TmV3YWJsZTxBc3BlY3Q+Pj4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUFzcGVjdE1ldGFkYXRhUmVhZGVyIGV4dGVuZHMgTWV0YWRhdGFSZWFkZXIge1xuICAgIGdldEFzcGVjdHMoKTogVXNlQXNwZWN0TWFwO1xuICAgIGdldEFzcGVjdHNPZihtZXRob2ROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGFkdmljZTogQWR2aWNlKTogQXJyYXk8TmV3YWJsZTxBc3BlY3Q+Pjtcbn1cbmV4cG9ydCBjbGFzcyBBT1BDbGFzc01ldGFkYXRhIGltcGxlbWVudHMgTWV0YWRhdGE8VXNlQXNwZWN0TWV0YWRhdGFSZWFkZXIsIE5ld2FibGU8dW5rbm93bj4+IHtcbiAgICBzdGF0aWMgZ2V0UmVmbGVjdEtleSgpIHtcbiAgICAgICAgcmV0dXJuICdhb3A6dXNlLWFzcGVjdC1tZXRhZGF0YSc7XG4gICAgfVxuICAgIHByaXZhdGUgYXNwZWN0TWFwOiBVc2VBc3BlY3RNYXAgPSBjcmVhdGVEZWZhdWx0VmFsdWVNYXAoKCkgPT4gY3JlYXRlRGVmYXVsdFZhbHVlTWFwKCgpID0+IFtdKSk7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSUdOT1JFXG4gICAgfVxuXG4gICAgYXBwZW5kKG1ldGhvZE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgYWR2aWNlOiBBZHZpY2UsIGFzcGVjdHM6IEFycmF5PE5ld2FibGU8QXNwZWN0Pj4pIHtcbiAgICAgICAgY29uc3QgYWR2aWNlQXNwZWN0TWFwID0gdGhpcy5hc3BlY3RNYXAuZ2V0KG1ldGhvZE5hbWUpO1xuICAgICAgICBjb25zdCBleGl0aW5nQXNwZWN0QXJyYXkgPSBhZHZpY2VBc3BlY3RNYXAuZ2V0KGFkdmljZSk7XG4gICAgICAgIGV4aXRpbmdBc3BlY3RBcnJheS5wdXNoKC4uLmFzcGVjdHMpO1xuICAgIH1cblxuICAgIHJlYWRlcigpOiBVc2VBc3BlY3RNZXRhZGF0YVJlYWRlciB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRBc3BlY3RzOiAoKTogVXNlQXNwZWN0TWFwID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hc3BlY3RNYXA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0QXNwZWN0c09mOiAobWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sLCBhZHZpY2U6IEFkdmljZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFzcGVjdE1hcC5nZXQobWV0aG9kTmFtZSkuZ2V0KGFkdmljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGFydGlhbEluc3RBd2FyZVByb2Nlc3NvciB9IGZyb20gJy4uL3R5cGVzL0luc3RhbnRpYXRpb25Bd2FyZVByb2Nlc3Nvcic7XG5pbXBvcnQgeyBNZXRhZGF0YUluc3RhbmNlTWFuYWdlciB9IGZyb20gJy4uL21ldGFkYXRhL01ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyJztcbmltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSAnLi4vZm91bmRhdGlvbi9BcHBsaWNhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHsgY3JlYXRlQXNwZWN0IH0gZnJvbSAnLi9jcmVhdGVBc3BlY3QnO1xuaW1wb3J0IHsgQU9QQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4vQU9QQ2xhc3NNZXRhZGF0YSc7XG5pbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vdHlwZXMvTmV3YWJsZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBT1BJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3IgaW1wbGVtZW50cyBQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yIHtcbiAgICBzdGF0aWMgY3JlYXRlKGFwcEN0eDogQXBwbGljYXRpb25Db250ZXh0KTogTmV3YWJsZTxBT1BJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3I+IHtcbiAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQU9QSW5zdGFudGlhdGlvbkF3YXJlUHJvY2Vzc29yIHtcbiAgICAgICAgICAgIHByb3RlY3RlZCByZWFkb25seSBhcHBDdHg6IEFwcGxpY2F0aW9uQ29udGV4dCA9IGFwcEN0eDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IGFwcEN0eDogQXBwbGljYXRpb25Db250ZXh0O1xuICAgIGFmdGVySW5zdGFudGlhdGlvbjxUIGV4dGVuZHMgb2JqZWN0PihpbnN0YW5jZTogVCk6IFQge1xuICAgICAgICBjb25zdCBjbGF6eiA9IGluc3RhbmNlLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGNvbnN0IHVzZUFzcGVjdE1ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEoY2xhenosIEFPUENsYXNzTWV0YWRhdGEpO1xuICAgICAgICBjb25zdCB1c2VBc3BlY3RNZXRhZGF0YVJlYWRlciA9IHVzZUFzcGVjdE1ldGFkYXRhLnJlYWRlcigpO1xuICAgICAgICBjb25zdCB1c2VBc3BlY3RzTWFwID0gdXNlQXNwZWN0TWV0YWRhdGFSZWFkZXIuZ2V0QXNwZWN0cygpO1xuICAgICAgICBpZiAodXNlQXNwZWN0c01hcC5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhc3BlY3RTdG9yZU1hcCA9IG5ldyBXZWFrTWFwPG9iamVjdCwgTWFwPHN0cmluZyB8IHN5bWJvbCwgRnVuY3Rpb24+PigpO1xuICAgICAgICBhc3BlY3RTdG9yZU1hcC5zZXQoaW5zdGFuY2UsIG5ldyBNYXA8c3RyaW5nIHwgc3ltYm9sLCBGdW5jdGlvbj4oKSk7XG5cbiAgICAgICAgY29uc3QgcHJveHlSZXN1bHQgPSBuZXcgUHJveHkoaW5zdGFuY2UsIHtcbiAgICAgICAgICAgIGdldDogKHRhcmdldCwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpblZhbHVlID0gKHRhcmdldCBhcyBSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCB1bmtub3duPilbcHJvcF07XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gdGFyZ2V0ICYmIHR5cGVvZiBvcmlnaW5WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc3BlY3RNYXAgPSBhc3BlY3RTdG9yZU1hcC5nZXQoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFzcGVjdE1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3BlY3RNYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNwZWN0TWFwLmdldChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc3BlY3RGbiA9IGNyZWF0ZUFzcGVjdCh0aGlzLmFwcEN0eCwgdGFyZ2V0LCBwcm9wLCBvcmlnaW5WYWx1ZSwgdXNlQXNwZWN0TWV0YWRhdGFSZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICBhc3BlY3RNYXAuc2V0KHByb3AsIGFzcGVjdEZuKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzcGVjdEZuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJveHlSZXN1bHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuaW1wb3J0IHsgSW5zdGFudGlhdGlvbkF3YXJlUHJvY2Vzc29yLCBQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yIH0gZnJvbSAnLi4vdHlwZXMvSW5zdGFudGlhdGlvbkF3YXJlUHJvY2Vzc29yJztcbmltcG9ydCB7IGxhenlNZW1iZXIgfSBmcm9tICdAdmdlcmJvdC9sYXp5JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29udGV4dCB9IGZyb20gJy4vQXBwbGljYXRpb25Db250ZXh0JztcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSAnLi4vdHlwZXMvSW5zdGFuY2UnO1xuaW1wb3J0IHsgR2xvYmFsTWV0YWRhdGEgfSBmcm9tICcuLi9tZXRhZGF0YS9HbG9iYWxNZXRhZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXM6IFNldDxOZXdhYmxlPFBhcnRpYWxJbnN0QXdhcmVQcm9jZXNzb3I+PiA9IG5ldyBTZXQoKTtcbiAgICBAbGF6eU1lbWJlcjxJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyLCBrZXlvZiBJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyLCBQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yW10+KHtcbiAgICAgICAgZXZhbHVhdGU6IGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdsb2JhbEluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMgPSBHbG9iYWxNZXRhZGF0YS5nZXRJbnN0YW5jZSgpLnJlYWRlcigpLmdldEluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMgPSBnbG9iYWxJbnN0QXdhcmVQcm9jZXNzb3JDbGFzc2VzLmNvbmNhdChcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGluc3RhbmNlLmluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMubWFwKGl0ID0+IGluc3RhbmNlLmNvbnRhaW5lci5nZXRJbnN0YW5jZTxQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yLCB2b2lkPihpdCkpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldEJ5OiBbXG4gICAgICAgICAgICBpbnN0YW5jZSA9PiBpbnN0YW5jZS5pbnN0QXdhcmVQcm9jZXNzb3JDbGFzc2VzLnNpemUsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2xvYmFsSW5zdEF3YXJlUHJvY2Vzc29yQ2xhc3NlcyA9IEdsb2JhbE1ldGFkYXRhLmdldEluc3RhbmNlKCkucmVhZGVyKCkuZ2V0SW5zdEF3YXJlUHJvY2Vzc29yQ2xhc3NlcygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnbG9iYWxJbnN0QXdhcmVQcm9jZXNzb3JDbGFzc2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pXG4gICAgcHJpdmF0ZSBpbnN0QXdhcmVQcm9jZXNzb3JJbnN0YW5jZXMhOiBBcnJheTxQYXJ0aWFsSW5zdEF3YXJlUHJvY2Vzc29yPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBBcHBsaWNhdGlvbkNvbnRleHQpIHt9XG4gICAgYXBwZW5kSW5zdEF3YXJlUHJvY2Vzc29yQ2xhc3MoaW5zdEF3YXJlUHJvY2Vzc29yQ2xhc3M6IE5ld2FibGU8UGFydGlhbEluc3RBd2FyZVByb2Nlc3Nvcj4pIHtcbiAgICAgICAgdGhpcy5pbnN0QXdhcmVQcm9jZXNzb3JDbGFzc2VzLmFkZChpbnN0QXdhcmVQcm9jZXNzb3JDbGFzcyk7XG4gICAgfVxuICAgIGFwcGVuZEluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMoXG4gICAgICAgIGluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXM6IFNldDxOZXdhYmxlPFBhcnRpYWxJbnN0QXdhcmVQcm9jZXNzb3I+PiB8IEFycmF5PE5ld2FibGU8UGFydGlhbEluc3RBd2FyZVByb2Nlc3Nvcj4+XG4gICAgKSB7XG4gICAgICAgIGluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMuZm9yRWFjaChpdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMuYWRkKGl0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJlZm9yZUluc3RhbnRpYXRpb248VD4oY29tcG9uZW50Q2xhc3M6IE5ld2FibGU8VD4sIGFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICBjb25zdCBpbnN0QXdhcmVQcm9jZXNzb3JzID0gdGhpcy5pbnN0QXdhcmVQcm9jZXNzb3JJbnN0YW5jZXM7XG4gICAgICAgIGxldCBpbnN0YW5jZTogdW5kZWZpbmVkIHwgSW5zdGFuY2U8VD47XG4gICAgICAgIGluc3RBd2FyZVByb2Nlc3NvcnMuc29tZShwcm9jZXNzb3IgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzb3IuYmVmb3JlSW5zdGFudGlhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3RhbmNlID0gcHJvY2Vzc29yLmJlZm9yZUluc3RhbnRpYXRpb248VD4oY29tcG9uZW50Q2xhc3MsIGFyZ3MpIGFzIEluc3RhbmNlPFQ+O1xuICAgICAgICAgICAgcmV0dXJuICEhaW5zdGFuY2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGFmdGVySW5zdGFudGlhdGlvbjxUPihpbnN0YW5jZTogSW5zdGFuY2U8VD4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdEF3YXJlUHJvY2Vzc29ySW5zdGFuY2VzLnJlZHVjZSgoaW5zdGFuY2UsIHByb2Nlc3NvcikgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3Nvci5hZnRlckluc3RhbnRpYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwcm9jZXNzb3IuYWZ0ZXJJbnN0YW50aWF0aW9uKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCBhcyBJbnN0YW5jZTxUPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0sIGluc3RhbmNlKTtcbiAgICB9XG4gICAgaXNJbnN0QXdhcmVQcm9jZXNzb3JDbGFzcyhjbHM6IE5ld2FibGU8dW5rbm93bj4pIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0SW5zdEF3YXJlUHJvY2Vzc29yQ2xhc3NlcygpO1xuICAgICAgICByZXR1cm4gY2xhc3Nlcy5pbmRleE9mKGNscyBhcyBOZXdhYmxlPEluc3RhbnRpYXRpb25Bd2FyZVByb2Nlc3Nvcj4pID4gLTE7XG4gICAgfVxuICAgIGdldEluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMoKSB7XG4gICAgICAgIGNvbnN0IGdsb2JhbEluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMgPSBHbG9iYWxNZXRhZGF0YS5nZXRJbnN0YW5jZSgpLnJlYWRlcigpLmdldEluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMoKTtcbiAgICAgICAgcmV0dXJuIGdsb2JhbEluc3RBd2FyZVByb2Nlc3NvckNsYXNzZXMuY29uY2F0KEFycmF5LmZyb20odGhpcy5pbnN0QXdhcmVQcm9jZXNzb3JDbGFzc2VzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5zdGFuY2VTY29wZSB9IGZyb20gJy4vSW5zdGFuY2VTY29wZSc7XG5pbXBvcnQgeyBJbnN0YW5jZVJlc29sdXRpb24gfSBmcm9tICcuLi90eXBlcy9JbnN0YW5jZVJlc29sdXRpb24nO1xuaW1wb3J0IHsgSWRlbnRpZmllciB9IGZyb20gJy4uL3R5cGVzL0lkZW50aWZpZXInO1xuaW1wb3J0IHsgU2VydmljZUZhY3RvcnkgfSBmcm9tICcuLi90eXBlcy9TZXJ2aWNlRmFjdG9yeSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgeyBBbnlGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzL0FueUZ1bmN0aW9uJztcbmltcG9ydCB7IGhhc0FyZ3MsIGhhc0luamVjdGlvbnMsIEludm9rZUZ1bmN0aW9uT3B0aW9ucyB9IGZyb20gJy4vSW52b2tlRnVuY3Rpb25PcHRpb25zJztcbmltcG9ydCB7IEdsb2JhbE1ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEvR2xvYmFsTWV0YWRhdGEnO1xuaW1wb3J0IHsgRmFjdG9yeUlkZW50aWZpZXIgfSBmcm9tICcuLi90eXBlcy9GYWN0b3J5SWRlbnRpZmllcic7XG5pbXBvcnQgeyBDbGFzc01ldGFkYXRhLCBDbGFzc01ldGFkYXRhUmVhZGVyIH0gZnJvbSAnLi4vbWV0YWRhdGEvQ2xhc3NNZXRhZGF0YSc7XG5pbXBvcnQgeyBDb21wb25lbnRJbnN0YW5jZUJ1aWxkZXIgfSBmcm9tICcuL0NvbXBvbmVudEluc3RhbmNlQnVpbGRlcic7XG5pbXBvcnQgeyBGdW5jdGlvbk1ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEvRnVuY3Rpb25NZXRhZGF0YSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHRPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvQXBwbGljYXRpb25Db250ZXh0T3B0aW9ucyc7XG5pbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vdHlwZXMvTmV3YWJsZSc7XG5pbXBvcnQgeyBNZXRhZGF0YUluc3RhbmNlTWFuYWdlciB9IGZyb20gJy4uL21ldGFkYXRhL01ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyJztcbmltcG9ydCB7IFNlcnZpY2VGYWN0b3J5RGVmIH0gZnJvbSAnLi9TZXJ2aWNlRmFjdG9yeURlZic7XG5pbXBvcnQgeyBTaW5nbGV0b25JbnN0YW5jZVJlc29sdXRpb24gfSBmcm9tICcuLi9yZXNvbHV0aW9uL1NpbmdsZXRvbkluc3RhbmNlUmVzb2x1dGlvbic7XG5pbXBvcnQgeyBHbG9iYWxTaGFyZWRJbnN0YW5jZVJlc29sdXRpb24gfSBmcm9tICcuLi9yZXNvbHV0aW9uL0dsb2JhbFNoYXJlZEluc3RhbmNlUmVzb2x1dGlvbic7XG5pbXBvcnQgeyBUcmFuc2llbnRJbnN0YW5jZVJlc29sdXRpb24gfSBmcm9tICcuLi9yZXNvbHV0aW9uL1RyYW5zaWVudEluc3RhbmNlUmVzb2x1dGlvbic7XG5pbXBvcnQgeyBFdmFsdWF0aW9uT3B0aW9ucywgRXhwcmVzc2lvblR5cGUgfSBmcm9tICcuLi90eXBlcy9FdmFsdWF0ZU9wdGlvbnMnO1xuaW1wb3J0IHsgSlNPTkRhdGEgfSBmcm9tICcuLi90eXBlcy9KU09ORGF0YSc7XG5pbXBvcnQgeyBFdmFsdWF0b3IgfSBmcm9tICcuLi90eXBlcy9FdmFsdWF0b3InO1xuaW1wb3J0IHsgSlNPTkRhdGFFdmFsdWF0b3IgfSBmcm9tICcuLi9ldmFsdWF0b3IvSlNPTkRhdGFFdmFsdWF0b3InO1xuaW1wb3J0IHsgRW52aXJvbm1lbnRFdmFsdWF0b3IgfSBmcm9tICcuLi9ldmFsdWF0b3IvRW52aXJvbm1lbnRFdmFsdWF0b3InO1xuaW1wb3J0IHsgQXJndkV2YWx1YXRvciB9IGZyb20gJy4uL2V2YWx1YXRvci9Bcmd2RXZhbHVhdG9yJztcbmltcG9ydCB7IGlzTm9kZUpzIH0gZnJvbSAnLi4vY29tbW9uL2lzTm9kZUpzJztcbmltcG9ydCB7IFBhcnRpYWxJbnN0QXdhcmVQcm9jZXNzb3IgfSBmcm9tICcuLi90eXBlcy9JbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3InO1xuaW1wb3J0IHsgQU9QSW5zdGFudGlhdGlvbkF3YXJlUHJvY2Vzc29yIH0gZnJvbSAnLi4vYW9wL0FPUEluc3RhbnRpYXRpb25Bd2FyZVByb2Nlc3Nvcic7XG5pbXBvcnQgeyBJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyIH0gZnJvbSAnLi9JbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyJztcbmltcG9ydCB7IExpZmVjeWNsZU1hbmFnZXIgfSBmcm9tICcuL0xpZmVjeWNsZU1hbmFnZXInO1xuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9JbnN0YW5jZSc7XG5cbmNvbnN0IFBSRV9ERVNUUk9ZX0VWRU5UX0tFWSA9ICdjb250YWluZXI6ZXZlbnQ6cHJlLWRlc3Ryb3knO1xuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Db250ZXh0IHtcbiAgICBwcml2YXRlIHJlc29sdXRpb25zID0gbmV3IE1hcDxJbnN0YW5jZVNjb3BlIHwgc3RyaW5nLCBJbnN0YW5jZVJlc29sdXRpb24+KCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBwcml2YXRlIGZhY3RvcmllcyA9IG5ldyBNYXA8RmFjdG9yeUlkZW50aWZpZXIsIFNlcnZpY2VGYWN0b3J5RGVmPGFueT4+KCk7XG4gICAgcHJpdmF0ZSBldmFsdWF0b3JDbGFzc2VzID0gbmV3IE1hcDxzdHJpbmcsIE5ld2FibGU8RXZhbHVhdG9yPj4oKTtcbiAgICBwcml2YXRlIGV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRTY29wZTogSW5zdGFuY2VTY29wZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhenlNb2RlOiBib29sZWFuO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5zdEF3YXJlUHJvY2Vzc29yTWFuYWdlcjogSW5zdGFudGlhdGlvbkF3YXJlUHJvY2Vzc29yTWFuYWdlcjtcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogQXBwbGljYXRpb25Db250ZXh0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNjb3BlID0gb3B0aW9ucy5kZWZhdWx0U2NvcGUgfHwgSW5zdGFuY2VTY29wZS5TSU5HTEVUT047XG4gICAgICAgIHRoaXMubGF6eU1vZGUgPSBvcHRpb25zLmxhenlNb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5sYXp5TW9kZTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckluc3RhbmNlU2NvcGVSZXNvbHV0aW9uKEluc3RhbmNlU2NvcGUuU0lOR0xFVE9OLCBTaW5nbGV0b25JbnN0YW5jZVJlc29sdXRpb24pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW5zdGFuY2VTY29wZVJlc29sdXRpb24oSW5zdGFuY2VTY29wZS5HTE9CQUxfU0hBUkVEX1NJTkdMRVRPTiwgR2xvYmFsU2hhcmVkSW5zdGFuY2VSZXNvbHV0aW9uKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckluc3RhbmNlU2NvcGVSZXNvbHV0aW9uKEluc3RhbmNlU2NvcGUuVFJBTlNJRU5ULCBUcmFuc2llbnRJbnN0YW5jZVJlc29sdXRpb24pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZhbHVhdG9yKEV4cHJlc3Npb25UeXBlLkpTT05fUEFUSCwgSlNPTkRhdGFFdmFsdWF0b3IpO1xuICAgICAgICBpZiAoaXNOb2RlSnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmFsdWF0b3IoRXhwcmVzc2lvblR5cGUuRU5WLCBFbnZpcm9ubWVudEV2YWx1YXRvcik7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXZhbHVhdG9yKEV4cHJlc3Npb25UeXBlLkFSR1YsIEFyZ3ZFdmFsdWF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5zdEF3YXJlUHJvY2Vzc29yTWFuYWdlciA9IG5ldyBJbnN0YW50aWF0aW9uQXdhcmVQcm9jZXNzb3JNYW5hZ2VyKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW5zdEF3YXJlUHJvY2Vzc29yKEFPUEluc3RhbnRpYXRpb25Bd2FyZVByb2Nlc3Nvci5jcmVhdGUodGhpcykpO1xuICAgIH1cbiAgICBnZXRJbnN0YW5jZTxULCBPPihzeW1ib2w6IElkZW50aWZpZXI8VD4sIG93bmVyPzogTyk6IFQge1xuICAgICAgICBpZiAoc3ltYm9sID09PSBBcHBsaWNhdGlvbkNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzIGFzIHVua25vd24gYXMgVDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHN5bWJvbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHN5bWJvbCA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnlEZWYgPSB0aGlzLmdldEZhY3Rvcnkoc3ltYm9sKTtcbiAgICAgICAgICAgIGlmIChmYWN0b3J5RGVmKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBmYWN0b3J5LCBpbmplY3Rpb25zIH0gPSBmYWN0b3J5RGVmO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZuID0gZmFjdG9yeSh0aGlzLCBvd25lcik7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuaW52b2tlKGZuLCB7XG4gICAgICAgICAgICAgICAgICAgIGluamVjdGlvbnNcbiAgICAgICAgICAgICAgICB9KSBhcyBUO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN0ciA9IHJlc3VsdD8uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zdHIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSBjb25zdHIgYXMgTmV3YWJsZTxUPjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSBuZXcgTGlmZWN5Y2xlTWFuYWdlcjxUPihjb21wb25lbnRDbGFzcywgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5zdEF3YXJlUHJvY2Vzc29yID0gdGhpcy5pbnN0QXdhcmVQcm9jZXNzb3JNYW5hZ2VyLmlzSW5zdEF3YXJlUHJvY2Vzc29yQ2xhc3MoY29tcG9uZW50Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlci5pbnZva2VQcmVJbmplY3RNZXRob2QocmVzdWx0IGFzIEluc3RhbmNlPFQ+KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0luc3RBd2FyZVByb2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5pbnN0QXdhcmVQcm9jZXNzb3JNYW5hZ2VyLmFmdGVySW5zdGFudGlhdGlvbihyZXN1bHQgYXMgSW5zdGFuY2U8VD4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyLmludm9rZVBvc3RJbmplY3RNZXRob2QocmVzdWx0IGFzIEluc3RhbmNlPFQ+KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NNZXRhZGF0YSA9IEdsb2JhbE1ldGFkYXRhLmdldEluc3RhbmNlKCkucmVhZGVyKCkuZ2V0Q2xhc3NNZXRhZGF0YTxUPihzeW1ib2wpO1xuICAgICAgICAgICAgICAgIGlmICghY2xhc3NNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGNsYXNzTWV0YWRhdGEucmVhZGVyKCkuZ2V0Q2xhc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSBzeW1ib2w7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IENsYXNzTWV0YWRhdGEuZ2V0SW5zdGFuY2UoY29tcG9uZW50Q2xhc3MpLnJlYWRlcigpO1xuICAgICAgICBjb25zdCBzY29wZSA9IHJlYWRlci5nZXRTY29wZSgpO1xuICAgICAgICBjb25zdCByZXNvbHV0aW9uID0gKHRoaXMucmVzb2x1dGlvbnMuZ2V0KHNjb3BlKSB8fCB0aGlzLnJlc29sdXRpb25zLmdldCh0aGlzLmRlZmF1bHRTY29wZSkpIGFzIEluc3RhbmNlUmVzb2x1dGlvbjtcbiAgICAgICAgY29uc3QgZ2V0SW5zdGFuY2VPcHRpb25zID0ge1xuICAgICAgICAgICAgaWRlbnRpZmllcjogY29tcG9uZW50Q2xhc3MsXG4gICAgICAgICAgICBvd25lcixcbiAgICAgICAgICAgIG93bmVyUHJvcGVydHlLZXk6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVzb2x1dGlvbi5zaG91bGRHZW5lcmF0ZShnZXRJbnN0YW5jZU9wdGlvbnMpKSB7XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyID0gdGhpcy5jcmVhdGVDb21wb25lbnRJbnN0YW5jZUJ1aWxkZXIoY29tcG9uZW50Q2xhc3MpO1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBidWlsZGVyLmJ1aWxkKCk7XG4gICAgICAgICAgICBjb25zdCBzYXZlSW5zdGFuY2VPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIC4uLmdldEluc3RhbmNlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdXRpb24uc2F2ZUluc3RhbmNlKHNhdmVJbnN0YW5jZU9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdXRpb24uZ2V0SW5zdGFuY2UoZ2V0SW5zdGFuY2VPcHRpb25zKSBhcyBUO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUJ1aWxkZXI8VD4oY29tcG9uZW50Q2xhc3M6IE5ld2FibGU8VD4pIHtcbiAgICAgICAgY29uc3QgYnVpbGRlciA9IG5ldyBDb21wb25lbnRJbnN0YW5jZUJ1aWxkZXIoY29tcG9uZW50Q2xhc3MsIHRoaXMsIHRoaXMuaW5zdEF3YXJlUHJvY2Vzc29yTWFuYWdlcik7XG4gICAgICAgIGJ1aWxkZXIuYXBwZW5kTGF6eU1vZGUodGhpcy5sYXp5TW9kZSk7XG4gICAgICAgIHJldHVybiBidWlsZGVyO1xuICAgIH1cblxuICAgIGdldEZhY3Rvcnkoa2V5OiBGYWN0b3J5SWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBmYWN0b3J5ID0gR2xvYmFsTWV0YWRhdGEuZ2V0SW5zdGFuY2UoKS5yZWFkZXIoKS5nZXRDb21wb25lbnRGYWN0b3J5KGtleSk7XG4gICAgICAgIGlmICghZmFjdG9yeSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yaWVzLmdldChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgIH1cbiAgICBiaW5kRmFjdG9yeTxUPihzeW1ib2w6IEZhY3RvcnlJZGVudGlmaWVyLCBmYWN0b3J5OiBTZXJ2aWNlRmFjdG9yeTxULCB1bmtub3duPiwgaW5qZWN0aW9ucz86IElkZW50aWZpZXJbXSkge1xuICAgICAgICB0aGlzLmZhY3Rvcmllcy5zZXQoc3ltYm9sLCBuZXcgU2VydmljZUZhY3RvcnlEZWYoZmFjdG9yeSwgaW5qZWN0aW9ucykpO1xuICAgIH1cbiAgICBpbnZva2U8UiwgQ3R4PihmdW5jOiBBbnlGdW5jdGlvbjxSLCBDdHg+LCBvcHRpb25zOiBJbnZva2VGdW5jdGlvbk9wdGlvbnM8Q3R4PiA9IHt9KTogUiB7XG4gICAgICAgIGxldCBmbjogQW55RnVuY3Rpb248Uj47XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm4gPSBmdW5jLmJpbmQob3B0aW9ucy5jb250ZXh0IGFzIFRoaXNQYXJhbWV0ZXJUeXBlPHR5cGVvZiBmdW5jPikgYXMgQW55RnVuY3Rpb248Uj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmbiA9IGZ1bmMgYXMgQW55RnVuY3Rpb248Uj47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0FyZ3Mob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmFyZ3MgPyBmbiguLi5vcHRpb25zLmFyZ3MpIDogZm4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzSW5qZWN0aW9ucyhvcHRpb25zKSkge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IG9wdGlvbnMuaW5qZWN0aW9ucyA/IG9wdGlvbnMuaW5qZWN0aW9ucy5tYXAoaXQgPT4gdGhpcy5nZXRJbnN0YW5jZShpdCkpIDogW107XG4gICAgICAgICAgICByZXR1cm4gYXJncy5sZW5ndGggPiAwID8gZm4oLi4uYXJncykgOiBmbigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXIuZ2V0TWV0YWRhdGEoZm4sIEZ1bmN0aW9uTWV0YWRhdGEpLnJlYWRlcigpO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVycyA9IG1ldGFkYXRhLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgY29uc3QgYXJncyA9IHBhcmFtZXRlcklkZW50aWZpZXJzLm1hcChpZGVudGlmaWVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKGlkZW50aWZpZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KFBSRV9ERVNUUk9ZX0VWRU5UX0tFWSk7XG4gICAgICAgIHRoaXMucmVzb2x1dGlvbnMuZm9yRWFjaChpdCA9PiB7XG4gICAgICAgICAgICBpdC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBldmFsdWF0ZTxULCBPLCBBPihleHByZXNzaW9uOiBzdHJpbmcsIG9wdGlvbnM6IEV2YWx1YXRpb25PcHRpb25zPE8sIHN0cmluZywgQT4pOiBUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3QgZXZhbHVhdG9yQ2xhc3MgPSB0aGlzLmV2YWx1YXRvckNsYXNzZXMuZ2V0KG9wdGlvbnMudHlwZSk7XG4gICAgICAgIGlmICghZXZhbHVhdG9yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVua25vd24gZXZhbHVhdG9yIG5hbWU6ICR7b3B0aW9ucy50eXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2YWx1YXRvciA9IHRoaXMuZ2V0SW5zdGFuY2UoZXZhbHVhdG9yQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZXZhbHVhdG9yLmV2YWwodGhpcywgZXhwcmVzc2lvbiwgb3B0aW9ucy5leHRlcm5hbEFyZ3MpO1xuICAgIH1cbiAgICByZWNvcmRKU09ORGF0YShuYW1lc3BhY2U6IHN0cmluZywgZGF0YTogSlNPTkRhdGEpIHtcbiAgICAgICAgY29uc3QgZXZhbHVhdG9yID0gdGhpcy5nZXRJbnN0YW5jZShKU09ORGF0YUV2YWx1YXRvcik7XG4gICAgICAgIGV2YWx1YXRvci5yZWNvcmREYXRhKG5hbWVzcGFjZSwgZGF0YSk7XG4gICAgfVxuICAgIGJpbmRJbnN0YW5jZTxUPihpZGVudGlmaWVyOiBzdHJpbmcgfCBzeW1ib2wsIGluc3RhbmNlOiBUKSB7XG4gICAgICAgIGNvbnN0IHJlc29sdXRpb24gPSB0aGlzLnJlc29sdXRpb25zLmdldChJbnN0YW5jZVNjb3BlLlNJTkdMRVRPTik7XG4gICAgICAgIHJlc29sdXRpb24/LnNhdmVJbnN0YW5jZSh7XG4gICAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgICAgaW5zdGFuY2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZ2lzdGVySW5zdGFuY2VTY29wZVJlc29sdXRpb248VCBleHRlbmRzIE5ld2FibGU8SW5zdGFuY2VSZXNvbHV0aW9uPj4oXG4gICAgICAgIHNjb3BlOiBJbnN0YW5jZVNjb3BlIHwgc3RyaW5nLFxuICAgICAgICByZXNvbHV0aW9uQ29uc3RydWN0b3I6IFQsXG4gICAgICAgIGNvbnN0cnVjdG9yQXJncz86IENvbnN0cnVjdG9yUGFyYW1ldGVyczxUPlxuICAgICkge1xuICAgICAgICB0aGlzLnJlc29sdXRpb25zLnNldChzY29wZSwgbmV3IHJlc29sdXRpb25Db25zdHJ1Y3RvciguLi4oY29uc3RydWN0b3JBcmdzIHx8IFtdKSkpO1xuICAgIH1cbiAgICByZWdpc3RlckV2YWx1YXRvcihuYW1lOiBzdHJpbmcsIGV2YWx1YXRvckNsYXNzOiBOZXdhYmxlPEV2YWx1YXRvcj4pIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBNZXRhZGF0YUluc3RhbmNlTWFuYWdlci5nZXRNZXRhZGF0YShldmFsdWF0b3JDbGFzcywgQ2xhc3NNZXRhZGF0YSk7XG4gICAgICAgIG1ldGFkYXRhLnNldFNjb3BlKEluc3RhbmNlU2NvcGUuU0lOR0xFVE9OKTtcbiAgICAgICAgdGhpcy5ldmFsdWF0b3JDbGFzc2VzLnNldChuYW1lLCBldmFsdWF0b3JDbGFzcyk7XG4gICAgfVxuICAgIHJlZ2lzdGVySW5zdEF3YXJlUHJvY2Vzc29yKGNsYXp6OiBOZXdhYmxlPFBhcnRpYWxJbnN0QXdhcmVQcm9jZXNzb3I+KSB7XG4gICAgICAgIHRoaXMuaW5zdEF3YXJlUHJvY2Vzc29yTWFuYWdlci5hcHBlbmRJbnN0QXdhcmVQcm9jZXNzb3JDbGFzcyhjbGF6eik7XG4gICAgfVxuICAgIG9uUHJlRGVzdHJveShsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudEVtaXR0ZXIub24oUFJFX0RFU1RST1lfRVZFTlRfS0VZLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIGdldENsYXNzTWV0YWRhdGE8VD4oY3RvcjogTmV3YWJsZTxUPikge1xuICAgICAgICByZXR1cm4gQ2xhc3NNZXRhZGF0YS5nZXRJbnN0YW5jZShjdG9yKS5yZWFkZXIoKSBhcyBDbGFzc01ldGFkYXRhUmVhZGVyPFQ+O1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IEFzcGVjdCwgSm9pblBvaW50IH0gZnJvbSAnLi9Bc3BlY3QnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSAnLi4vZm91bmRhdGlvbi9BcHBsaWNhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uL3R5cGVzL05ld2FibGUnO1xuaW1wb3J0IHsgSW5qZWN0IH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9JbmplY3QnO1xuaW1wb3J0IHsgbGF6eVByb3AgfSBmcm9tICdAdmdlcmJvdC9sYXp5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudE1ldGhvZEFzcGVjdCBpbXBsZW1lbnRzIEFzcGVjdCB7XG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoY2xheno6IE5ld2FibGU8dW5rbm93bj4sIG1ldGhvZE5hbWU6IHN0cmluZyB8IHN5bWJvbCk6IE5ld2FibGU8QXNwZWN0PiB7XG4gICAgICAgIHJldHVybiBjbGFzcyBDb21wb25lbnRNZXRob2RBc3BlY3RJbXBsIGV4dGVuZHMgQ29tcG9uZW50TWV0aG9kQXNwZWN0IHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICAgICAgbGF6eVByb3AodGhpcywgJ2FzcGVjdEluc3RhbmNlJywge1xuICAgICAgICAgICAgICAgICAgICBldmFsdWF0ZTogKCkgPT4gdGhpcy5hcHBDdHguZ2V0SW5zdGFuY2UoY2xhenopXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleGVjdXRlKGN0eDogSm9pblBvaW50KTogYW55IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jID0gdGhpcy5hc3BlY3RJbnN0YW5jZVttZXRob2ROYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXMuYXNwZWN0SW5zdGFuY2UsIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCBhc3BlY3RJbnN0YW5jZSE6IGFueTtcbiAgICBASW5qZWN0KEFwcGxpY2F0aW9uQ29udGV4dClcbiAgICBwcm90ZWN0ZWQgYXBwQ3R4ITogQXBwbGljYXRpb25Db250ZXh0O1xuICAgIGFic3RyYWN0IGV4ZWN1dGUoY3R4OiBKb2luUG9pbnQpOiBhbnk7XG59XG4iLCJpbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vdHlwZXMvTmV3YWJsZSc7XG5cbmZ1bmN0aW9uIGdldE1ldGhvZERlc2NyaXB0b3JzKHByb3RvdHlwZTogb2JqZWN0KTogUmVjb3JkPHN0cmluZywgUHJvcGVydHlEZXNjcmlwdG9yPiB7XG4gICAgaWYgKFxuICAgICAgICB0eXBlb2YgcHJvdG90eXBlICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBwcm90b3R5cGUgPT09IG51bGwgfHxcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZSA9PT0gcHJvdG90eXBlIHx8XG4gICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZSA9PT0gcHJvdG90eXBlXG4gICAgKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3Qgc3VwZXJQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICBjb25zdCBzdXBlckRlc2NyaXB0b3JzID0gc3VwZXJQcm90b3R5cGUgPT09IHByb3RvdHlwZSA/IHt9IDogZ2V0TWV0aG9kRGVzY3JpcHRvcnMoc3VwZXJQcm90b3R5cGUpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN1cGVyRGVzY3JpcHRvcnMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHByb3RvdHlwZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTWV0aG9kTWVtYmVyTmFtZXM8VD4oY2xzOiBOZXdhYmxlPFQ+KSB7XG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBnZXRNZXRob2REZXNjcmlwdG9ycyhjbHMucHJvdG90eXBlKTtcbiAgICBkZWxldGUgZGVzY3JpcHRvcnNbJ2NvbnN0cnVjdG9yJ107XG4gICAgY29uc3QgbWV0aG9kTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZXNjcmlwdG9ycykge1xuICAgICAgICBjb25zdCBtZW1iZXIgPSBjbHMucHJvdG90eXBlW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgbWVtYmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBtZXRob2ROYW1lcy5hZGQoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kTmFtZXM7XG59XG4iLCJpbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vdHlwZXMvTmV3YWJsZSc7XG5pbXBvcnQgeyBnZXRBbGxNZXRob2RNZW1iZXJOYW1lcyB9IGZyb20gJy4uL2NvbW1vbi9nZXRBbGxNZXRob2RNZW1iZXJOYW1lcyc7XG5cbnR5cGUgTWVtYmVySWRlbnRpZmllciA9IHN0cmluZyB8IHN5bWJvbDtcblxuZXhwb3J0IGNsYXNzIFBvaW50Y3V0IHtcbiAgICBzdGF0aWMgY29tYmluZSguLi5wczogUG9pbnRjdXRbXSkge1xuICAgICAgICByZXR1cm4gcHMucmVkdWNlKChwcmV2LCBpdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYuY29tYmluZShpdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb2Y8VD4oY2xzOiBOZXdhYmxlPFQ+LCAuLi5tZXRob2ROYW1lczogTWVtYmVySWRlbnRpZmllcltdKSB7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgTWFwPE5ld2FibGU8dW5rbm93bj4sIFNldDxNZW1iZXJJZGVudGlmaWVyPj4oKTtcbiAgICAgICAgY29uc3QgbWV0aG9kcyA9IG5ldyBTZXQ8TWVtYmVySWRlbnRpZmllcj4obWV0aG9kTmFtZXMgYXMgTWVtYmVySWRlbnRpZmllcltdKTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGdldEFsbE1ldGhvZE1lbWJlck5hbWVzKGNscykuZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICAgICAgICAgICAgICBtZXRob2RzLmFkZChtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVudHJpZXMuc2V0KGNscywgbWV0aG9kcyk7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnRjdXQoZW50cmllcyk7XG4gICAgfVxuICAgIHN0YXRpYyB0ZXN0TWF0Y2g8VD4oY2xzOiBOZXdhYmxlPFQ+LCByZWdleDogUmVnRXhwKSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWVzID0gZ2V0QWxsTWV0aG9kTWVtYmVyTmFtZXMoY2xzKTtcbiAgICAgICAgY29uc3QgbWF0Y2hNZXRob2ROYW1lcyA9IEFycmF5LmZyb20obWV0aG9kTmFtZXMpLmZpbHRlcihpdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdChpdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUG9pbnRjdXQub2YoY2xzLCAuLi5tYXRjaE1ldGhvZE5hbWVzKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb20oLi4uY2xhc3NlczogQXJyYXk8TmV3YWJsZTx1bmtub3duPj4pIHtcbiAgICAgICAgY29uc3Qgb2YgPSAoLi4ubWV0aG9kTmFtZXM6IE1lbWJlcklkZW50aWZpZXJbXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFBvaW50Y3V0LmNvbWJpbmUoLi4uY2xhc3Nlcy5tYXAoY2xzID0+IFBvaW50Y3V0Lm9mKGNscywgLi4ubWV0aG9kTmFtZXMpKSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRlc3RNYXRjaCA9IChyZWdleDogUmVnRXhwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUG9pbnRjdXQuY29tYmluZShcbiAgICAgICAgICAgICAgICAuLi5jbGFzc2VzLm1hcChjbHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUG9pbnRjdXQudGVzdE1hdGNoKGNscywgcmVnZXgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2YsXG4gICAgICAgICAgICB0ZXN0TWF0Y2hcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtZXRob2RFbnRyaWVzOiBNYXA8TmV3YWJsZTx1bmtub3duPiwgU2V0PE1lbWJlcklkZW50aWZpZXI+Pikge31cbiAgICBjb21iaW5lKG90aGVyOiBQb2ludGN1dCkge1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwPE5ld2FibGU8dW5rbm93bj4sIFNldDxNZW1iZXJJZGVudGlmaWVyPj4odGhpcy5tZXRob2RFbnRyaWVzKTtcbiAgICAgICAgY29uc3Qgb3RoZXJNYXAgPSBvdGhlci5tZXRob2RFbnRyaWVzO1xuICAgICAgICBvdGhlck1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZXQgPSBtYXAuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoISFzZXQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXQuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludGN1dChtYXApO1xuICAgIH1cbiAgICBnZXRNZXRob2RzTWFwKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1hcCh0aGlzLm1ldGhvZEVudHJpZXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50Y3V0IH0gZnJvbSAnLi9Qb2ludGN1dCc7XG5pbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vdHlwZXMvTmV3YWJsZSc7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRob2RBc3BlY3QgfSBmcm9tICcuL0NvbXBvbmVudE1ldGhvZEFzcGVjdCc7XG5pbXBvcnQgeyBNZXRhZGF0YUluc3RhbmNlTWFuYWdlciB9IGZyb20gJy4uL21ldGFkYXRhL01ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyJztcbmltcG9ydCB7IEFPUENsYXNzTWV0YWRhdGEgfSBmcm9tICcuL0FPUENsYXNzTWV0YWRhdGEnO1xuaW1wb3J0IHsgQWR2aWNlIH0gZnJvbSAnLi9BZHZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXNwZWN0KFxuICAgIGNvbXBvbmVudEFzcGVjdENsYXNzOiBOZXdhYmxlPHVua25vd24+LFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZyB8IHN5bWJvbCxcbiAgICBhZHZpY2U6IEFkdmljZSxcbiAgICBwb2ludGN1dDogUG9pbnRjdXRcbikge1xuICAgIGNvbnN0IEFzcGVjdENsYXNzID0gQ29tcG9uZW50TWV0aG9kQXNwZWN0LmNyZWF0ZShjb21wb25lbnRBc3BlY3RDbGFzcywgbWV0aG9kTmFtZSk7XG4gICAgcG9pbnRjdXQuZ2V0TWV0aG9kc01hcCgpLmZvckVhY2goKGpwTWVtYmVycywganBDbGFzcykgPT4ge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IE1ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyLmdldE1ldGFkYXRhKGpwQ2xhc3MsIEFPUENsYXNzTWV0YWRhdGEpO1xuICAgICAgICBqcE1lbWJlcnMuZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmFwcGVuZChtZXRob2ROYW1lLCBhZHZpY2UsIFtBc3BlY3RDbGFzc10pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IFBvaW50Y3V0IH0gZnJvbSAnLi4vUG9pbnRjdXQnO1xuaW1wb3J0IHsgQWR2aWNlIH0gZnJvbSAnLi4vQWR2aWNlJztcbmltcG9ydCB7IGFkZEFzcGVjdCB9IGZyb20gJy4uL2FkZEFzcGVjdCc7XG5pbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vLi4vdHlwZXMvTmV3YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBZnRlcihwb2ludGN1dDogUG9pbnRjdXQpOiBNZXRob2REZWNvcmF0b3Ige1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICBhZGRBc3BlY3QodGFyZ2V0LmNvbnN0cnVjdG9yIGFzIE5ld2FibGU8dW5rbm93bj4sIHByb3BlcnR5S2V5LCBBZHZpY2UuQWZ0ZXIsIHBvaW50Y3V0KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgUG9pbnRjdXQgfSBmcm9tICcuLi9Qb2ludGN1dCc7XG5pbXBvcnQgeyBBZHZpY2UgfSBmcm9tICcuLi9BZHZpY2UnO1xuaW1wb3J0IHsgYWRkQXNwZWN0IH0gZnJvbSAnLi4vYWRkQXNwZWN0JztcbmltcG9ydCB7IE5ld2FibGUgfSBmcm9tICcuLi8uLi90eXBlcy9OZXdhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIEFmdGVyUmV0dXJuKHBvaW50Y3V0OiBQb2ludGN1dCk6IE1ldGhvZERlY29yYXRvciB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIGFkZEFzcGVjdCh0YXJnZXQuY29uc3RydWN0b3IgYXMgTmV3YWJsZTx1bmtub3duPiwgcHJvcGVydHlLZXksIEFkdmljZS5BZnRlclJldHVybiwgcG9pbnRjdXQpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBQb2ludGN1dCB9IGZyb20gJy4uL1BvaW50Y3V0JztcbmltcG9ydCB7IEFkdmljZSB9IGZyb20gJy4uL0FkdmljZSc7XG5pbXBvcnQgeyBhZGRBc3BlY3QgfSBmcm9tICcuLi9hZGRBc3BlY3QnO1xuaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uLy4uL3R5cGVzL05ld2FibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gQXJvdW5kKHBvaW50Y3V0OiBQb2ludGN1dCk6IE1ldGhvZERlY29yYXRvciB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIGFkZEFzcGVjdCh0YXJnZXQuY29uc3RydWN0b3IgYXMgTmV3YWJsZTx1bmtub3duPiwgcHJvcGVydHlLZXksIEFkdmljZS5Bcm91bmQsIHBvaW50Y3V0KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgUG9pbnRjdXQgfSBmcm9tICcuLi9Qb2ludGN1dCc7XG5pbXBvcnQgeyBBZHZpY2UgfSBmcm9tICcuLi9BZHZpY2UnO1xuaW1wb3J0IHsgYWRkQXNwZWN0IH0gZnJvbSAnLi4vYWRkQXNwZWN0JztcbmltcG9ydCB7IE5ld2FibGUgfSBmcm9tICcuLi8uLi90eXBlcy9OZXdhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIEJlZm9yZShwb2ludGN1dDogUG9pbnRjdXQpOiBNZXRob2REZWNvcmF0b3Ige1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICBhZGRBc3BlY3QodGFyZ2V0LmNvbnN0cnVjdG9yIGFzIE5ld2FibGU8dW5rbm93bj4sIHByb3BlcnR5S2V5LCBBZHZpY2UuQmVmb3JlLCBwb2ludGN1dCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IFBvaW50Y3V0IH0gZnJvbSAnLi4vUG9pbnRjdXQnO1xuaW1wb3J0IHsgQWR2aWNlIH0gZnJvbSAnLi4vQWR2aWNlJztcbmltcG9ydCB7IGFkZEFzcGVjdCB9IGZyb20gJy4uL2FkZEFzcGVjdCc7XG5pbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vLi4vdHlwZXMvTmV3YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBGaW5hbGx5KHBvaW50Y3V0OiBQb2ludGN1dCk6IE1ldGhvZERlY29yYXRvciB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIGFkZEFzcGVjdCh0YXJnZXQuY29uc3RydWN0b3IgYXMgTmV3YWJsZTx1bmtub3duPiwgcHJvcGVydHlLZXksIEFkdmljZS5GaW5hbGx5LCBwb2ludGN1dCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IFBvaW50Y3V0IH0gZnJvbSAnLi4vUG9pbnRjdXQnO1xuaW1wb3J0IHsgQWR2aWNlIH0gZnJvbSAnLi4vQWR2aWNlJztcbmltcG9ydCB7IGFkZEFzcGVjdCB9IGZyb20gJy4uL2FkZEFzcGVjdCc7XG5pbXBvcnQgeyBOZXdhYmxlIH0gZnJvbSAnLi4vLi4vdHlwZXMvTmV3YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUaHJvd24ocG9pbnRjdXQ6IFBvaW50Y3V0KTogTWV0aG9kRGVjb3JhdG9yIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgYWRkQXNwZWN0KHRhcmdldC5jb25zdHJ1Y3RvciBhcyBOZXdhYmxlPHVua25vd24+LCBwcm9wZXJ0eUtleSwgQWR2aWNlLlRocm93biwgcG9pbnRjdXQpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBBZHZpY2UgfSBmcm9tICcuLi9BZHZpY2UnO1xuaW1wb3J0IHsgQXNwZWN0LCBQcm9jZWVkaW5nQXNwZWN0IH0gZnJvbSAnLi4vQXNwZWN0JztcbmltcG9ydCB7IE1ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvTWV0YWRhdGFJbnN0YW5jZU1hbmFnZXInO1xuaW1wb3J0IHsgQU9QQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL0FPUENsYXNzTWV0YWRhdGEnO1xuaW1wb3J0IHsgTmV3YWJsZSB9IGZyb20gJy4uLy4uL3R5cGVzL05ld2FibGUnO1xuXG5mdW5jdGlvbiBVc2VBc3BlY3RzKGFkdmljZTogQWR2aWNlLkFyb3VuZCwgYXNwZWN0czogQXJyYXk8TmV3YWJsZTxQcm9jZWVkaW5nQXNwZWN0Pj4pOiBNZXRob2REZWNvcmF0b3I7XG5mdW5jdGlvbiBVc2VBc3BlY3RzKGFkdmljZTogQWR2aWNlLCBhc3BlY3RzOiBBcnJheTxOZXdhYmxlPEFzcGVjdD4+KTogTWV0aG9kRGVjb3JhdG9yO1xuZnVuY3Rpb24gVXNlQXNwZWN0cyhhZHZpY2U6IEFkdmljZSwgYXNwZWN0czogQXJyYXk8TmV3YWJsZTxBc3BlY3Q+Pik6IE1ldGhvZERlY29yYXRvciB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIGNvbnN0IGNsYXp6ID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IE1ldGFkYXRhSW5zdGFuY2VNYW5hZ2VyLmdldE1ldGFkYXRhKGNsYXp6LCBBT1BDbGFzc01ldGFkYXRhKTtcbiAgICAgICAgbWV0YWRhdGEuYXBwZW5kKHByb3BlcnR5S2V5LCBhZHZpY2UsIGFzcGVjdHMpO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IFVzZUFzcGVjdHMgfTtcbiJdLCJuYW1lcyI6WyJJbnN0YW5jZVNjb3BlIiwiUmVm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LENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQWtCLEdBQUEsU0FBQSxDQUFBLFVBQUEsQ0FBQyxTQUFT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QUE7Z0JBQ3hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsU0FBQyxDQUFDLENBQUM7SUFDUCxLQUFDLENBQUMsQ0FBQztJQUNQOztJQ2ZNLFNBQVUsS0FBSyxDQUFDLFFBQWtCLEVBQUE7UUFDcEMsT0FBTyxVQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUE7SUFDaEMsUUFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQStCLEVBQUUsV0FBVyxFQUFFSyxjQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNGLEtBQUMsQ0FBQztJQUNOOztJQ0pNLFNBQVUsV0FBVyxDQUFDLFFBQWtCLEVBQUE7UUFDMUMsT0FBTyxVQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUE7SUFDaEMsUUFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQStCLEVBQUUsV0FBVyxFQUFFQSxjQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pHLEtBQUMsQ0FBQztJQUNOOztJQ0pNLFNBQVUsTUFBTSxDQUFDLFFBQWtCLEVBQUE7UUFDckMsT0FBTyxVQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUE7SUFDaEMsUUFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQStCLEVBQUUsV0FBVyxFQUFFQSxjQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVGLEtBQUMsQ0FBQztJQUNOOztJQ0pNLFNBQVUsTUFBTSxDQUFDLFFBQWtCLEVBQUE7UUFDckMsT0FBTyxVQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUE7SUFDaEMsUUFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQStCLEVBQUUsV0FBVyxFQUFFQSxjQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVGLEtBQUMsQ0FBQztJQUNOOztJQ0pNLFNBQVUsT0FBTyxDQUFDLFFBQWtCLEVBQUE7UUFDdEMsT0FBTyxVQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUE7SUFDaEMsUUFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQStCLEVBQUUsV0FBVyxFQUFFQSxjQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdGLEtBQUMsQ0FBQztJQUNOOztJQ0pNLFNBQVUsTUFBTSxDQUFDLFFBQWtCLEVBQUE7UUFDckMsT0FBTyxVQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUE7SUFDaEMsUUFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQStCLEVBQUUsV0FBVyxFQUFFQSxjQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVGLEtBQUMsQ0FBQztJQUNOOztJQ0RBLFNBQVMsVUFBVSxDQUFDLE1BQWMsRUFBRSxPQUErQixFQUFBO1FBQy9ELE9BQU8sVUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFBO0lBQ2hDLFFBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNqQyxJQUFNLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDOUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELEtBQUMsQ0FBQztJQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMiwyN119
