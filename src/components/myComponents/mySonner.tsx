import { toast } from "sonner";

export const showUserAddedToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("User added successfully", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};


export const showBookAddedToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("Book added successfully", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};
