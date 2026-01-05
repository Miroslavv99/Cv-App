export function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            fill="none"
          >
            <path
              d="M28 26
       C28 22 32 18 36 18
       H78
       C82 18 86 22 86 26
       V86
       C86 90 82 94 78 94
       H36
       C32 94 28 90 28 86Z"
              stroke="#ffffff"
              stroke-width="6"
              opacity="0.35"
            />

            <path
              d="M18 36
       C18 32 22 28 26 28
       H68
       C72 28 76 32 76 36
       V96
       C76 100 72 104 68 104
       H26
       C22 104 18 100 18 96Z"
              stroke="#ffffff"
              stroke-width="6"
            />

            <path
              d="M30 52h34M30 64h26M30 76h20"
              stroke="#ffffff"
              stroke-width="6"
              stroke-linecap="round"
            />
          </svg>
          <h1>CV Generator</h1>
        </div>
      </header>
    </>
  );
}
