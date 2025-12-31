export type ComponentRender<
  T extends string | number | boolean | null | undefined = string,
> = () => T | Promise<T>;

export type AsyncComponent = () => Promise<{ default: ComponentRender }>;

export interface Options {
  root?: string;
  pathname?: string;
  routes: Array<{
    hash?: string;
    component: ComponentRender | AsyncComponent;
  }>;
}
