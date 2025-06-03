import HttpGetCallerWhole, { HttpOTHERcaller, HttpOTHERcallerForm } from "..";

export class BlogsFetches {
  CreateBlogV2 = async (payload: any) => {
    const res = await HttpOTHERcaller(
      `blogV2`,
      {
        "Content-Type": "application/json",
      },
      "POST",
      payload
    );
    return res;
  };

  CreateBl = async (payload: any) => {
    const res = await HttpOTHERcaller(
      `blog`,
      {
        "Content-Type": "application/json",
      },
      "POST",
      payload
    );
    return res;
  };

  GetAllBlogs = async ({ page, pageSize }) => {
    const res = await HttpGetCallerWhole(`blog/${page}/${pageSize}`, {
      "Content-Type": "application/json",
    });
    return res;
  };

  UpdatBlogs = async (payload:any) => {
    const res = await HttpOTHERcaller(
      `blog/update`,
      {
        "Content-Type": "application/json",
      },
      "PATCH",
      payload
    );
    return res;
  };
  DeleteBlogs = async (_id: string) => {
    const res = await HttpOTHERcaller(
      `blog/delete/${_id}`,
      {
        "Content-Type": "application/json",
      },
      "DELETE",
      {}
    );
    return res;
  };
}
