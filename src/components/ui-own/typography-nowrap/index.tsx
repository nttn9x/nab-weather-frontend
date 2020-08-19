import React from "react";

import { Tooltip, Typography } from "components/ui-libraries";

export default function TypographyOwn({ title, ...props }: any) {
  return (
    <Tooltip title={title || " "} placement="top-start">
      <Typography {...props} />
    </Tooltip>
  );
}
