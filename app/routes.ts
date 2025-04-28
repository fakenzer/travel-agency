import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/Admin/admin-layout.tsx", [
    route("dashboard", "routes/Admin/dashboard.tsx"),
    route("all-user", "routes/Admin/all-users.tsx"),
  ]),
] satisfies RouteConfig;
