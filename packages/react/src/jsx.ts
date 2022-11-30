// ReactElement
import {
  REACT_ELEMENT_TYPE,
  Type,
  Key,
  Ref,
  Props,
  ReactElement,
  ElementType,
} from '@mini-react/shared';

export function ReactElement(type: Type, key: Key, ref: Ref, props: Props): ReactElement {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    __mark: 'wangshouren',
  };

  return element;
}

export function jsx(type: ElementType, config: any, ...maybeChildren: any[]) {
  let key: Key = null;
  let props: Props = {};
  let ref: Ref = null;

  // 处理 config
  for (const prop in config) {
    const val = config[prop];
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val;
      }

      continue;
    }

    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val;
      }

      continue;
    }

    if (Object.prototype.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }
  }

  const maybeChildrenLength = maybeChildren.length;
  if (maybeChildrenLength) {
    if (maybeChildrenLength === 1) {
      props.children = maybeChildren[0];
    } else {
      props.children = maybeChildren;
    }
  }

  return ReactElement(type, key, ref, props);
}

/**
 * 现实中有差别
 */
export const jsxDev = jsx;
