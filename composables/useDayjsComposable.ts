const dayjs = useDayjs();

function dayjsFormat(date: string, format: string): string {
  return dayjs(date).format(format);
}

const useDayjsComposable = () => {
  return {
    dayjsFormat,
    dayjs,
  };
};

export default useDayjsComposable;
