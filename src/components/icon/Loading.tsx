import React from "react";

export const LoadingComponent = (props?: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="100" height="100" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_107_2" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_107_2"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFV0lEQVR4nO2dW6hWRRSAx8qSXtIyMtSCLOohIzOJXo5dKCU6Sg9CFkISJSo9VFBCFw26WRZEnV6yh7Beoh56kC4eKOhQIJZahoce5FgvaqTHrMhKvxj2Cn5+/svM7L3/2Xv2+t7PzJpZ+591mTXrGKMoiqIoiqIoiqIoiuIEcAZwN/AJcBj4G5gAtgLzdRsHCHAh8AXdOQVsBKaoYspXxrnALtzYqAopXyHP4M6/occXcCawFHgZeA8YAe4HZhS/qpoCnAX8ih9vBcyzCNjXZbxJYH05K6wZZBvlywHPOW4C/nQY9yXTdIBlAQr5y2P86cARj7GXmSZD9vX6cthj/Kc9x95rmgwwQ+INH7Z7jL8bf+aZJgN84LlhKzzGPhGgkKWmyQCXA8cdN2vUJzhUhYQr5VYHpewEZnqO+23AL+Sy0HUkBTAPeL+DTfkFeAqYFjCm/Tsfdps6A5wv0e6IRL82Cl5iE4U5xpwODAHLgetthJ1zLJuodOVOU1eAhyTK7cT3djNNBQAWOwaGm01dAbY4LNBuwmJTAch+ad91kfMYsNbUFeAu3LHHxXmmOvctt9sUCfAu8Dpwnz3WTJ2R48iHJ2PLnCzAFfjzTWy5kwW4I0AhJ2LLnSxywePL8dhyp57m8GVXbLmTpof72I0nYsucNBJBu3KoKm5vHiTivwd4VTISbwCP2BPDVAFJkbgEhkOm/hUxzwF/9FjnR9b7rIKw6yXK7cQe4DpTY4CLPcqTbAppSVVu/FZL1Guj383AbXmSizWsFfsf+ytaGFv2JCE7pkLYb0ubYsufFGQGvJfN6MfK2GtICuBe8vFh7DUkBZlrm4eDsdeQFMC2nApxLuRTHADezKmQQy7zKI4AD+dUyJjrXEp5CdRWHjeDADjH1izZShOTOGTpkBAmfWvHQoSbKhH47y3Pyz4GLjVp34xOBihkbUyv46fSv4aISH2ZT4D42iCEWthHiOdNwpCt/4c+ezA5sDIi4NE+wnxlEofsbeJKG4HLqXBS7nnGrAEf6CkhlzCNVkilsHcafRTybGwZGwfwThdlHAQuiC1f4xC39wXgtxa3dztwSWzZGg1wtgSG9a6FVRQlJ9Y2AjdKydNQZcp9Gtjm4wHryoudbGdCyp8uii1rU9z7/bhhn1qviy1zsgDDgUUN9iJL+3cVCXBtSxY7BK1bLthmuB5T3bC2ZkFhQjUZMgNeBJ+aKgHMBTZJs8o1NrI3NYDMmyqC08AcUwWAazrcrH1ZdaWQNd3s5NqGssZUAWkG04kHTYUBbqBYtpgq0KNhzNaCk5tXSUeG5RJBz47Qya4X20wV6HG9mbudK3CLPHE42mWOcclCzx1QJ7tejJgqIJ0Q2jma5wsGrrSei8dm2JdaL/p0Cyqg9qqdDaYqiFL2yfH1GXB1zkqPY4Gb8jUwy2Mum5sqikUmNciU8U/OjfnRtZDP8Z2kCweSS6GQHVMhhWmd2OHSY8tmbVtuQfOwyqQGfjbDhdWO867LOc9o3d9TdvOmiuZnVyOf4/nBeJJ1zmSubRkMO84/xWZtPSP30VSVMbVHnJGXtz1lWSBHp81N9TLgq5I7ptqMeVnsCZRpjmSCX2npPLdB2gSm5U21A9xcmjrgSOz11Q6Kzym1oo8vK5B1bWWilK8oZcjO67LQx5eBShkvSSGbCv+CmgBZprYMtPggUCGzczZ76cTnhX85TYJifyWn6t48LTrANLnPKILHYq8nCYBZcp+RB+//caj0bxm4I0ARp6U2LO3URsT/YrBCEnmumVe1GQOyK8NSEblX3oaflLfiY/I/dNW1VRRFURRFURRFURTFFMN/+bUzD+vH6X4AAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};
