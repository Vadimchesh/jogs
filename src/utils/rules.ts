export const rules = {
  required: (message = "Обязательное поле") => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: string) {
      if (value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
