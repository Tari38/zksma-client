import React from "react";

const useSortableData = (items) => {
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];      
      return sortableItems;
    }, [items]);
  
    return { items: sortedItems };
  };
  
  export { useSortableData };
  