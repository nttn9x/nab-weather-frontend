import React from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import Highlighter from "react-highlight-words";

import { SearchIcon } from "components/icons";
import {
  Card,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popper,
} from "components/ui-libraries";

import { IProps, useAutoCompleteHook } from "./autocomplete.hook";

const AutoComplete: React.FC<IProps> = (props) => {
  const { t } = useTranslation();
  const {
    ref,
    anchorEl,
    open,
    textSearch,
    handleFocus,
    handleBlur,
    handleChange,
    handleItemClick,
  } = useAutoCompleteHook(props);

  const { placeholder, autoFocus, loading, data, keyValue } = props;

  return (
    <>
      <Card variant={"outlined"} classes={{ root: styles.container }}>
        <input
          value={textSearch}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          autoFocus={autoFocus}
          placeholder={placeholder || t("search")}
        />
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={"bottom-start"}
          transition
        >
          <div className={styles.popover}>
            <List component="nav" aria-label="secondary mailbox folders">
              {data.map((d: any, i: number) => (
                <ListItem onClick={() => handleItemClick(d, i)} key={i} button>
                  <ListItemText
                    primary={
                      <Highlighter
                        highlightClassName={styles.highlight}
                        searchWords={[textSearch]}
                        autoEscape={true}
                        textToHighlight={d[keyValue]}
                      />
                    }
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Popper>
        {loading ? (
          <IconButton className={styles.icon}>
            <CircularProgress size={20} />
          </IconButton>
        ) : (
          <IconButton className={styles.icon}>
            <SearchIcon />
          </IconButton>
        )}
      </Card>
    </>
  );
};

AutoComplete.defaultProps = {
  data: [],
  loading: false,
};

export default AutoComplete;
