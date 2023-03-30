import {toasterNotification} from "../components/ToasterNotification";

const async = async (cb: () => Promise<void>) => {
  try {
    await cb();
  } catch (err: any) {
    console.log({err});

    if (err.error) {
      console.log(err.error.data.message);
      toasterNotification(
        "error",
        "Something went wrong! Please try again later."
      );
    } else {
      toasterNotification("error", "Something went wrong!");
    }
  }
};

export default async;
