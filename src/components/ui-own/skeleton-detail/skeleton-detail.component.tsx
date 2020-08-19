import React from "react";
import styles from "./skeleton-detail.module.scss";

import { Skeleton } from "components/ui-libraries";

const SkeletonDetail: React.SFC = () => {
  return (
    <>
      <Skeleton className={styles.row} width="100%" height={100} />
      <Skeleton className={styles.row} width="60%" />
      <Skeleton className={styles.row} width="40%" />
    </>
  );
};

export default SkeletonDetail;
