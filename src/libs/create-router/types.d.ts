export type ComponentRender<
  T extends string | number | boolean | null | undefined = string,
> = () => T | Promise<T>;

export type AsyncComponent = () => Promise<{ default: ComponentRender }>;

export interface Options {
  root?: string;
  routes: Array<{
    path: string;
    component: ComponentRender | AsyncComponent;
  }>;
}
