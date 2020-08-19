import React from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import CellData from "./grid-list-item.component";
import CellEmpty from "./grid-list-loading.component";

export const ITEM_WIDTH = 150;
export const ITEM_HEIGHT = ITEM_WIDTH + 30;

const GridList = React.memo(({ loading, items, onItemClick }: any) => {
  return (
    <AutoSizer>
      {({ height, width }) => {
        const columnCount = Math.floor(width / ITEM_WIDTH);
        const rowCount = Math.ceil(items.length / columnCount);

        if (loading) {
          return (
            <Grid
              columnCount={2}
              rowCount={1}
              columnWidth={ITEM_WIDTH}
              rowHeight={ITEM_HEIGHT}
              height={height}
              width={width}
              itemData={{
                itemWidth: ITEM_WIDTH,
              }}
            >
              {CellEmpty}
            </Grid>
          );
        }

        return (
          <Grid
            columnCount={columnCount}
            rowCount={rowCount}
            columnWidth={ITEM_WIDTH}
            rowHeight={ITEM_HEIGHT}
            height={height}
            width={width}
            itemData={{
              items,
              columnCount,
              itemWidth: ITEM_WIDTH,
              onItemClick,
            }}
          >
            {CellData}
          </Grid>
        );
      }}
    </AutoSizer>
  );
});

export default GridList;
