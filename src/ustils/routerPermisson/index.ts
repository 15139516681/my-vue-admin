const routerPermission = (router: any) => {
  router.beforeEach(async (to: any, from: any) => {
    const token = localStorage.getItem("token");
    if (!token && to.name !== "login") {
      return { name: "login" };
    }
  });
};
export default routerPermission;
