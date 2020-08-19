import { ROUTES } from "../constants/navigation";

export const getProjectItemURL = (id: any) => {
  return `${ROUTES.ProjectList}/${id}/appearance/app-icon`;
};
