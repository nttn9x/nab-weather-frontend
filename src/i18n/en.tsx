import common from "./common";

import home from "./modules/home.i18n";

export default {
  ...common,

  //Modules
  home,

  error: {
    invalid_email: "Invalid email",
    this_field_is_required: "This field is required",
    create_data: "Oops, something went wrong",
  },
};
