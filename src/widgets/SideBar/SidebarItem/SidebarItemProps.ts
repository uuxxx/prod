export interface SidebarItemProps {
  path: string;
  SVGIcon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  name: string;
  collapsed?: boolean;
}
