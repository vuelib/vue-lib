/**
 * @param eventModifiers - The event's modifiers
 * @param eventError - The variable to store the event error a directive
 * @param eventFn - The variable to store the event function of a directive
*/

type DirectiveElement = HTMLElement & {
  eventModifiers?: string;
  eventFn?: EventListener;
  eventError?: EventListener;
}

export default DirectiveElement
