import { useEffect, useRef } from "react";

const App = () => {
  // hapa unaanza kudefine useRef yako iliuweze kuweka focus kwenye
  // input field yako
  const ref = useRef<HTMLInputElement>(null);
  // hapa unaweka effectHook yako
  useEffect(() => {
    // sideEffect
    if (ref.current) ref.current.focus();
  });
  return (
    <div>
      {/* nini maana ya effectHook */} 
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};
// kazi ya effectHook ni kukeep componet pure
export default App;
