import { ComponentType, useState } from "react";

const withLoader = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const [loading, setLoading] = useState<boolean>(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return (
      <div>{loading ? <p>Loading</p> : <WrappedComponent {...props} />}</div>
    );
  };
};

export default withLoader;
