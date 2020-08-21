import React, { ChangeEvent, useRef, useState } from "react";
import _size from "lodash/size";

import { TIMEOUT } from "constants/common";

export interface IProps {
  id?: string;
  loading?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  onChange?: any;
  onSelect?: any;
  data: object[];
  keyValue: string;
}

const timeoutId = 0;

export const useAutoCompleteHook = ({
  onChange,
  onSelect,
  keyValue,
  data,
}: IProps) => {
  const ref = useRef<any>(null);
  const [textSearch, setTextSearch] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  const handleClose = () => {
    if (!anchorEl) {
      return;
    }
    setAnchorEl(null);
  };

  const handleBlur = (event: ChangeEvent<HTMLElement>) => {
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  const handleFocus = (event: ChangeEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTextSearch(value);

    clearTimeout(timeoutId);

    setTimeout(() => {
      if (onChange) {
        onChange(value);
      }
    }, TIMEOUT.Search);
  };

  const handleItemClick = (d: any, i: number) => {
    if (onSelect) {
      onSelect(d, i);
    }
    setTextSearch("");

    handleClose();
  };

  const open = Boolean(anchorEl) && _size(data) > 0;

  return {
    ref,
    anchorEl,
    open,
    textSearch,
    handleFocus,
    handleBlur,
    handleChange,
    handleItemClick,
  };
};
