declare module 'negotiator' {
  interface Headers {
    [key: string]: string;
  }

  class Negotiator {
    constructor(headers: Headers);
    languages(): string[];
  }

  export { Headers, Negotiator };
  export default Negotiator;
} 