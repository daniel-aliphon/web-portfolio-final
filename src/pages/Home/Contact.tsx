export const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex gap-16 rounded-lg">
      <div className="h-full w-[40%] rounded-lg text-dark-text">
        <h1 className="text-6xl font-bold text-primary max-md:text-5xl max-sm:text-4xl">
          Contact Me
        </h1>

        <p>Contact Information:</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          similique eaque labore cumque, vero magnam velit excepturi aliquam cum
          ipsa numquam. Eum pariatur soluta eligendi nisi eaque laboriosam
          itaque quidem?
        </p>
      </div>
      <div className="flex h-full w-full flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="Firt Name"
            placeholder="First Name"
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="Last Name"
            placeholder="Last Name"
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="Email"
            placeholder="Email"
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="Phone"
            placeholder="Phone"
          />
        </div>
        <textarea
          className="w-full rounded-lg bg-dark-foreground p-2"
          name="Message"
          placeholder="Message"
          cols={30}
          rows={10}></textarea>
        <input
          className="w-fit rounded-lg border-2 border-primary px-4 py-2 text-primary"
          type="submit"
        />
      </div>
    </div>
  );
};
