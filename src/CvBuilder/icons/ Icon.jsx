export function Icon({ name }) {
  switch (name) {
    case "general":
      return (
        <>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ff00aa" />
                <stop offset="100%" stopColor="#ff6a64" />
              </linearGradient>
            </defs>

            <path
              fill="url(#grad1)"
              d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z"
            />
          </svg>
        </>
      );
      break;
    case "education":
      {
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#ff00aa" />
                  <stop offset="100%" stopColor="#ff6a64" />
                </linearGradient>
              </defs>

              <path
                fill="url(#grad2)"
                d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
              />
            </svg>
          </>
        );
      }
      break;
    case "professional":
      {
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="grad3" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#ff00aa" />
                  <stop offset="100%" stopColor="#ff6a64" />
                </linearGradient>
              </defs>

              <path
                fill="url(#grad3)"
                d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z"
              />
            </svg>
          </>
        );
      }
      break;
    case "chevron":
      {
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id="arrowGradient"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ff00aa" />
                  <stop offset="100%" stopColor="#ff6a64" />
                </linearGradient>
              </defs>

              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                fill="url(#arrowGradient)"
              />
            </svg>
          </>
        );
      }
      break;
  }
}
