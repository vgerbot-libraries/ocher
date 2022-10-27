import { ClassMetadata } from '../metadata/ClassMetadata';
import { GlobalMetadata } from '../metadata/GlobalMetadata';
import { ComponentClass } from '../foundation/ComponentClass';

export function Value(expression: string): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        const metadata = ClassMetadata.getMetadata(target.constructor as ComponentClass);
        const value_symbol = Symbol('');
        metadata.recordPropertyType(propertyKey, value_symbol);
        GlobalMetadata.getInstance().recordFactory(value_symbol, (container, owner) => {
            return container.evaluate(expression, owner);
        });
    };
}
