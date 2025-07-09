function Button(props) {
  return (
    <button
      className="px-4 py-2 rounded-md font-bold cursor-pointer bg-slate-400 hover:bg-slate-300"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
