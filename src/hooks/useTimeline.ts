import { useMemo } from "react";
import { TimelineItem } from "../components/Timeline/Timeline.types";

const useTimeline = (
  items: TimelineItem[],
  startDate: string,
  endDate: string
) => {
  const days = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dayCount = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return Array.from({ length: dayCount }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  }, [startDate, endDate]);

  // Calculate the position and width of timeline items
  const calculateItemPositions = () => {
    return items.map((item) => {
      const itemStart = new Date(item.start);
      const itemEnd = new Date(item.end);

      const position = Math.max(
        0,
        (itemStart.getTime() - new Date(startDate).getTime()) /
          (1000 * 60 * 60 * 24)
      );

      const width = Math.max(
        0,
        (itemEnd.getTime() - itemStart.getTime()) / (1000 * 60 * 60 * 24)
      );

      return {
        ...item,
        position,
        width,
      };
    });
  };

  const positions = useMemo(calculateItemPositions, [
    items,
    startDate,
    endDate,
  ]);

  return {
    days,
    positions,
  };
};

export default useTimeline;
