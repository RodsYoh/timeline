import { useTheme } from "@emotion/react";

/**
 * 5pots's colorful logo!
 * Colors are based on the star nemesis skin line!
 *
 * @example
 * ```
 * <Logo width="100%" />
 * ```
 */
export const Logo = (props: LogoProps) => {
  const { width, height, className = "logo", ...other } = props;
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...other}
    >
      <path
        d="M27.5433 25.9424C29.7863 25.3179 31.7361 24.2474 33.6605 24.961C35.5976 25.6875 38.0828 28.0706 39.1278 30.2754C40.1856 32.4674 40.8228 36.2015 39.9689 38.1641C39.1023 40.1267 35.9417 40.9169 33.9791 42.0639C32.0165 43.2108 30.3597 45.3391 28.206 45.0588C26.0394 44.7784 22.7004 41.9619 20.9927 40.3816C19.2977 38.8013 17.9213 37.5524 17.9978 35.5515C18.0615 33.5379 19.5781 30.2754 21.4133 28.351C23.2484 26.4266 27.4031 24.4003 29.0089 24.018C30.6019 23.6356 31.0352 25.8659 31.0225 26.0571M27.6197 23.7249C29.85 23.967 34.5271 26.656 36.4388 27.8667C38.3504 29.0774 39.0004 28.7843 39.0768 31.0018C39.1406 33.2193 37.8789 39.2856 36.8721 41.1845C35.8525 43.0707 35.1516 41.707 33.0106 42.357C30.8695 43.0069 26.358 45.594 24.0131 45.097C21.6682 44.5872 19.9349 41.4904 18.9536 39.3366C17.9596 37.1955 17.8066 34.5065 18.0998 32.2253C18.3929 29.9313 19.0556 26.707 20.6996 25.6237C22.3436 24.5532 26.3326 25.7257 27.9893 25.7639C29.6333 25.8149 30.1558 26.1463 30.5764 25.9169"
        fill={theme.color.highlight}
      />
      <path
        d="M33.036 24.5405C35.0496 25.1522 38.8346 27.8922 40.0454 30.0842C41.2433 32.2635 41.307 35.5388 40.2748 37.6288C39.2552 39.7189 35.9162 41.5668 33.8899 42.6246C31.8635 43.6824 30.3087 44.2304 28.1167 43.9882C25.9247 43.7461 22.5602 42.8158 20.7505 41.159C18.9536 39.5022 17.5899 36.1632 17.3223 34.0222C17.0419 31.8812 17.6409 29.6127 19.1065 28.2873C20.5721 26.9491 23.3376 26.4394 26.1159 26.0315C28.8941 25.6237 34.0173 25.5473 35.7888 25.8531C37.5602 26.159 36.9485 27.5354 36.7446 27.8412M23.0445 26.4649C24.9689 25.5218 29.6205 24.3238 31.94 24.8463C34.2467 25.3816 35.8015 28.249 36.923 29.6637C38.0445 31.091 38.3376 31.3459 38.669 33.3595C39.0131 35.3731 40.5551 39.9101 38.9621 41.7325C37.3818 43.5549 32.0547 43.9245 29.1617 44.3196C26.2688 44.7019 23.6435 45.0333 21.6171 44.0774C19.5908 43.1216 17.3733 40.4963 17.0292 38.5847C16.6851 36.673 18.4311 34.8506 19.5271 32.6203C20.6103 30.3901 22.9425 26.3119 23.567 25.2159C24.1787 24.1072 22.9935 25.7002 23.2484 26.0315"
        stroke={theme.color.highlight}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.3057 20.9459C12.2811 19.7607 14.0143 20.194 15.9769 21.2135C17.9395 22.2203 20.6541 24.8966 22.0942 26.9994C23.5343 29.1022 25.0381 31.2051 24.5921 33.8304C24.146 36.4429 21.1893 40.827 19.4179 42.7131C17.6337 44.612 16.2573 45.2365 13.8869 45.1728C11.5292 45.0963 7.09417 43.7836 5.24625 42.2926C3.41108 40.8142 3.16894 38.8389 2.85033 36.2645C2.53172 33.6902 2.18763 29.4463 3.3601 26.8593C4.51983 24.2722 8.26665 21.7233 9.83419 20.742C11.4017 19.7607 12.6889 20.691 12.7526 20.9714M13.4408 21.0351C16.0661 21.239 20.5649 21.9909 22.0432 23.5203C23.5343 25.0496 22.0559 27.4455 22.3363 30.2237C22.604 33.002 25.0381 37.9723 23.6872 40.1643C22.3236 42.369 16.5632 42.8915 14.18 43.4141C11.7968 43.9238 11.2998 44.2297 9.38814 43.2866C7.48925 42.3435 4.03555 40.2662 2.78661 37.7684C1.52493 35.2705 1.39748 30.9629 1.88177 28.2866C2.3533 25.6103 3.38559 22.7174 5.65407 21.7233C7.92255 20.7293 13.8614 22.1821 15.4926 22.3223C17.1112 22.4625 15.8367 22.5389 15.4162 22.5517"
        fill={theme.color.highlight}
      />
      <path
        d="M16.6141 22.6027C18.5258 23.7751 21.3168 26.273 22.5402 28.2866C23.7637 30.3129 24.5283 32.2501 23.9803 34.7352C23.4196 37.2203 21.253 41.5152 19.214 43.1847C17.1749 44.8669 14.078 45.1728 11.7331 44.7777C9.38813 44.3954 6.903 42.8278 5.1188 40.8397C3.3346 38.8644 1.25728 35.4616 1.02789 32.9C0.798491 30.3512 2.0092 27.369 3.74242 25.5084C5.46289 23.6477 8.77641 22.0292 11.389 21.7361C14.0016 21.4557 17.6082 23.2399 19.4051 23.8006C21.1893 24.3614 22.0559 25.228 22.1197 25.0878M15.7475 21.6723C18.1307 21.9145 20.1061 22.6536 21.7501 24.2722C23.3941 25.8779 25.8537 28.3503 25.5988 31.3325C25.344 34.3146 21.8775 40.177 20.208 42.1524C18.5385 44.1277 17.7356 43.2611 15.6073 43.1719C13.4663 43.0954 9.40087 42.9553 7.41277 41.6808C5.41192 40.4064 4.29042 37.5517 3.62772 35.5381C2.97776 33.5245 2.54446 31.804 3.47479 29.5993C4.41786 27.3945 7.42551 23.8006 9.26069 22.2713C11.0959 20.742 13.5173 20.4616 14.4858 20.4106C15.4544 20.3724 14.9446 21.7233 15.0848 22.0292"
        stroke={theme.color.highlight}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18.9084 10.8891C22.4258 10.0735 28.0333 11.6538 31.436 13.7821C34.8515 15.9104 38.3944 20.4601 39.3502 23.6716C40.2933 26.8832 38.6747 29.9163 37.1327 33.0387C35.5906 36.1738 33.3986 40.9274 30.0596 42.4312C26.7334 43.9223 21.0239 42.89 17.1114 42.0616C13.199 41.2333 8.73846 40.0735 6.58467 37.4482C4.44364 34.8101 3.98484 29.8781 4.23973 26.2715C4.50736 22.6649 5.48867 18.1024 8.13948 15.8339C10.803 13.5654 17.9653 13.387 20.1828 12.6733C22.4131 11.9469 21.3935 11.3989 21.4827 11.5391M15.8625 13.2851C19.4309 11.9214 23.9424 9.46179 27.2559 10.8382C30.5694 12.2273 33.7045 18.523 35.7563 21.5688C37.7954 24.6275 40.2295 25.8892 39.5286 29.1644C38.8277 32.427 34.724 38.8373 31.5252 41.1823C28.3391 43.5272 24.0826 43.6292 20.3612 43.2341C16.6272 42.839 12.2049 41.246 9.14627 38.7991C6.08765 36.3395 2.7359 31.5731 1.99674 28.489C1.25757 25.4049 2.16241 22.7796 4.68578 20.2817C7.22189 17.7965 15.0596 14.9928 17.1497 13.54C19.2525 12.0744 17.3536 11.1695 17.2516 11.5136"
        fill={theme.color.pbe}
      />
      <path
        d="M26.3128 11.3862C30.289 12.1381 34.6476 15.2987 36.6739 18.0769C38.7002 20.8679 38.7512 24.7549 38.4963 28.0684C38.2542 31.3692 37.7189 35.4219 35.2083 37.9325C32.6977 40.4304 27.498 42.8135 23.4199 43.1194C19.3289 43.4253 14.1548 41.6666 10.7138 39.7931C7.27286 37.907 3.85739 34.7337 2.74864 31.8407C1.63989 28.9478 2.23887 25.5833 4.0613 22.4227C5.88373 19.2494 9.0698 14.1389 13.6577 12.8518C18.2584 11.5646 28.0333 13.8076 31.6017 14.6997C35.1828 15.579 35.5651 18.0004 35.0936 18.1916M18.8192 11.9342C22.4131 11.2715 26.5932 13.6037 29.6391 15.031C32.6722 16.4711 35.2975 17.4907 37.0435 20.562C38.8022 23.6207 41.504 30.0055 40.1658 33.4338C38.8404 36.862 32.9653 39.3216 29.0528 41.1058C25.1276 42.89 20.5014 44.5723 16.6399 44.1517C12.7911 43.7311 8.063 41.0803 5.94745 38.5952C3.81916 36.1101 3.71721 32.9112 3.92112 29.2664C4.12502 25.6215 4.88968 19.6445 7.15816 16.7515C9.42664 13.8586 15.5821 12.6096 17.5575 11.9214C19.5328 11.246 18.8447 12.2018 19.0103 12.6606"
        stroke={theme.color.pbe}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M28.6569 10.4989C31.8175 11.9645 35.5133 16.374 36.7623 19.4198C38.024 22.453 37.0681 25.4734 36.176 28.7487C35.2839 32.0239 34.035 37.1599 31.3842 39.0715C28.7461 40.9704 23.8141 40.5371 20.3094 40.1675C16.8048 39.7979 12.5864 39.1862 10.3689 36.8668C8.16414 34.5473 7.29753 29.8192 7.05539 26.238C6.8005 22.6441 7.10636 17.865 8.86507 15.3162C10.6365 12.7673 13.9245 11.4419 17.6586 10.9322C21.3799 10.4224 28.6187 11.5694 31.244 12.2576C33.8693 12.9585 33.6782 14.9976 33.4105 15.0995M17.4165 7.89903C20.2202 7.10888 24.1709 11.1616 27.408 12.7801C30.6323 14.3986 35.3732 14.526 36.7878 17.5974C38.2024 20.6688 37.0172 27.7291 35.8829 31.2083C34.7487 34.6875 32.6714 36.9432 29.9823 38.4853C27.2933 40.0273 23.2788 41.0724 19.7487 40.4479C16.2185 39.8234 11.3247 36.956 8.82684 34.7385C6.31622 32.521 4.45555 30.1505 4.74867 27.1556C5.05453 24.1607 8.1259 19.8659 10.6365 16.7818C13.1471 13.6977 18.4615 9.46657 19.8124 8.65094C21.1633 7.82256 18.6272 11.1871 18.7164 11.8625"
        fill={theme.color.changes}
      />
      <path
        d="M15.5303 11.0596C18.0536 9.53033 21.3289 8.81665 24.6169 9.56857C27.9177 10.3077 33.1174 12.7674 35.2966 15.5584C37.4632 18.3494 38.0749 23.001 37.6288 26.3018C37.1955 29.6026 35.1819 32.9416 32.6331 35.363C30.0715 37.7844 25.6875 40.1293 22.3102 40.8303C18.9202 41.5312 14.8803 41.5312 12.3315 39.5686C9.76986 37.6187 7.71803 32.47 6.97887 29.1183C6.22695 25.7538 6.44361 22.402 7.87097 19.4454C9.29832 16.476 14.3068 12.7037 15.5175 11.3145C16.7282 9.93815 15.1097 11.0851 15.1607 11.1489M23.8905 11.0342C26.758 11.1743 30.0332 11.2636 32.6076 13.7487C35.1819 16.2466 39.3493 22.3511 39.3238 25.9704C39.2856 29.5771 35.1437 32.7759 32.3909 35.4267C29.6509 38.0775 26.1845 41.1616 22.8327 41.888C19.481 42.6017 14.8166 41.3528 12.2932 39.747C9.75712 38.154 8.58464 35.6943 7.65431 32.2661C6.73673 28.8379 5.79365 22.5932 6.74947 19.1523C7.70529 15.6986 10.2796 13.0478 13.402 11.5567C16.5371 10.0656 23.6484 10.2568 25.5345 10.2058C27.4334 10.1548 25.0885 11.34 24.7826 11.289"
        stroke={theme.color.changes}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18.3932 9.10479C20.9166 8.34014 25.9888 10.4812 28.5759 11.8193C31.1757 13.1575 32.9982 14.4574 33.9412 17.1337C34.8843 19.81 34.8588 24.9714 34.2216 27.8771C33.5844 30.7828 32.3992 33.1915 30.118 34.5678C27.8367 35.9442 23.44 36.3011 20.5215 36.1226C17.5903 35.957 14.4298 35.6384 12.5818 33.561C10.7467 31.471 9.54871 26.6409 9.47224 23.6205C9.40852 20.5874 10.479 17.8729 12.174 15.4132C13.869 12.9663 18.1766 9.74201 19.6549 8.86265C21.1332 7.9833 20.7892 9.85671 21.0568 10.1371M16.4306 9.7675C18.6991 8.23818 21.0058 10.3665 23.5292 11.1949C26.0398 12.0232 29.6974 12.7242 31.5581 14.7123C33.4187 16.7004 34.8971 20.3835 34.6804 23.098C34.4765 25.8125 32.259 28.5398 30.2836 30.9995C28.3083 33.4464 25.0585 37.0147 22.8537 37.8304C20.649 38.6588 18.9285 37.8559 17.0678 35.9442C15.2072 34.0326 12.773 29.0368 11.7152 26.3988C10.6702 23.748 9.76536 22.3461 10.7849 20.0649C11.8044 17.7836 16.6855 13.9221 17.8452 12.7114C19.005 11.5135 18.1766 12.6095 17.756 12.8516"
        fill={theme.color.champions}
      />
      <path
        d="M23.0577 9.28321C25.7849 9.21949 28.6014 11.1821 30.4111 13.0173C32.2335 14.8652 33.7374 17.4905 33.954 20.3452C34.1707 23.2 33.1129 27.3418 31.711 30.1711C30.3219 33.0003 27.8495 36.454 25.5683 37.3206C23.2871 38.1872 20.3304 36.5432 18.0109 35.3835C15.7042 34.2238 13.0661 32.7327 11.7025 30.3622C10.3261 27.9918 9.57422 24.0283 9.81636 21.1481C10.0458 18.2679 10.7849 15.0436 13.1426 13.1065C15.5003 11.1566 21.7068 9.84396 23.9498 9.52535C26.1927 9.20675 26.5623 10.9909 26.6133 11.1821M28.0279 11.1311C30.4621 12.1379 30.666 13.8202 31.4689 16.4073C32.2845 18.9816 33.3168 23.6205 32.8707 26.6282C32.4119 29.6358 30.3856 32.4905 28.7416 34.4786C27.0976 36.454 25.4536 38.7352 22.9939 38.4931C20.5215 38.2509 16.2395 35.1668 13.9455 33.0385C11.6515 30.8975 9.54873 28.3359 9.25561 25.6723C8.94975 22.996 10.683 19.3002 12.1358 16.9935C13.5887 14.6868 15.7424 13.1447 17.9982 11.8321C20.2539 10.5321 24.3448 9.15577 25.683 9.18126C27.0084 9.20675 25.6447 11.7046 26.0016 11.985"
        stroke={theme.color.champions}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M21.8948 3.58234C24.2525 3.92643 28.7767 4.76755 30.4717 6.20765C32.1667 7.6605 31.9373 10.0182 32.0647 12.2739C32.1794 14.5297 32.5872 18.0981 31.2236 19.7421C29.86 21.3861 26.4955 21.9086 23.8829 22.1125C21.2703 22.3037 17.5617 21.9213 15.5482 20.9273C13.5346 19.946 12.7572 18.0853 11.8396 16.1992C10.922 14.3258 9.4309 11.7896 10.0426 9.6741C10.6544 7.55855 13.3434 4.70383 15.4717 3.49313C17.6127 2.28242 21.2831 2.3334 22.8506 2.42261C24.4054 2.49907 24.826 3.95192 24.8515 3.99015M14.5796 2.67749C16.5422 1.54325 22.5448 1.93832 25.1828 2.61377C27.8336 3.27647 29.261 5.16262 30.4589 6.71743C31.6569 8.25948 32.6892 9.9927 32.3706 11.9043C32.052 13.8287 29.9747 16.2247 28.5728 18.2128C27.1709 20.2009 26.0239 23.1703 23.9721 23.8585C21.9203 24.5339 18.7215 23.6546 16.2618 22.3037C13.8022 20.94 9.83872 17.7157 9.227 15.7276C8.61527 13.7523 11.1769 12.1337 12.566 10.3878C13.9551 8.64181 16.6951 6.56449 17.5235 5.25183C18.3519 3.92643 17.3961 2.58828 17.5235 2.48633"
        fill={theme.color.backgroundPrimary}
      />
      <path
        d="M15.8668 3.65878C17.9441 2.48631 21.7037 2.10398 24.0104 2.44807C26.3171 2.79217 28.2797 4.00288 29.7198 5.72335C31.1727 7.44383 32.4853 10.4132 32.6765 12.7837C32.8804 15.1541 32.6637 18.251 30.9178 19.9587C29.1591 21.6537 24.7241 22.8644 22.1752 22.9918C19.6391 23.1065 17.5363 22.1889 15.6756 20.6979C13.8022 19.2068 11.6994 16.1609 10.973 14.0708C10.2466 11.9808 10.1956 9.89073 11.3298 8.14476C12.4513 6.3988 16.1981 4.44893 17.7402 3.59506C19.2823 2.75394 20.5694 2.8304 20.5949 3.0598M17.4981 1.97654C19.8175 0.549179 22.2517 0.931507 24.6731 1.58146C27.1072 2.21868 30.5737 3.64604 32.0648 5.82531C33.5686 8.01732 33.849 12.4013 33.6578 14.7081C33.4666 17.0275 32.9823 18.5059 30.9305 19.7038C28.8914 20.9018 24.1251 21.6282 21.3851 21.8831C18.6578 22.1507 16.3001 22.4311 14.5159 21.2714C12.7317 20.0989 11.024 17.2187 10.6799 14.8865C10.3358 12.5543 11.6357 9.26626 12.4386 7.31639C13.2542 5.35377 14.5924 3.44213 15.5482 3.13627C16.504 2.81766 18.0461 5.44298 18.1862 5.45572"
        stroke={theme.color.backgroundPrimary}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface LogoProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  /**
   * Logo's width
   * @default undefined
   */
  width?: string;
  /**
   * Logo's height
   * @default undefined
   */
  height?: string;
}
