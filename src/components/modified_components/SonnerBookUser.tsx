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

export const showUserEditToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("User updated successfully", {
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

export const showBookEditToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("Book updated successfully", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};

export const showBookDeleteToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("Book deleted successfully", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};

export const showUserDeleteToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("User deleted successfully", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};

export const showUserErrorToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("Failed to delete user", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};

export const showBookErrorToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("Failed to delete book", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};

export const showBookErrorToastUpdate = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("Failed to update book", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};

export const showUserErrorToastUpdate = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  toast("Failed to update user", {
    description: formattedDate,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};
