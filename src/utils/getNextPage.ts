type LastPage =
  | {
      nextPage: number;
      data: unknown[];
    }
  | undefined;

type AllPages = LastPage[];

export const getNextPageParam = (lastPage: LastPage, _allPages?: AllPages) => {
  if (lastPage?.data.length !== 10) return undefined;
  else return lastPage.nextPage;
};
