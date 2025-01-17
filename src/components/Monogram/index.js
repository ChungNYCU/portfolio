import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="46"
      height="47"
      viewBox="0 0 46 47"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
        <path d="m 21.2828 0.1141 c -4.5612 0.6062 -8.929 1.8996 -12.6 4.8182 c -2.3236 1.8472 -4.4982 4.261 -5.881 6.897 c -7.2248 13.773 0.1082 30.3458 15.281 34.026 c 2.677 0.6492 5.6742 0.7034 8.4 0.314 c 3.206 -0.458 6.5146 -1.7506 9.2 -3.553 c 16.0662 -10.783 12.342 -36.3074 -6.4 -41.6414 c -2.5148 -0.7156 -5.3824 -1.2086 -8 -0.8608 m 12.4 2.7152 l 0.2 0.2 c 0 3.225 0.0994 6.7798 -1.2 9.8 l 0.2 0.2 c 1.9706 -1.9016 4.0474 -3.7266 5.6 -6 l 0.4 0.2 l 0.2 0.2 l 0 0.4 c -1.769 1.957 -2.8082 4.9342 -5.2078 6.3444 c -1.32 0.7756 -2.9644 0.603 -4.3922 1.0556 l 0 0.4 c 0.5596 0.934 0.4038 4.2534 -1.381 3.6676 c -1.748 -0.5738 0.9226 -2.6372 -0.8308 -3.347 c -0.9954 -0.4028 -2.2468 -0.0006 -3.1882 0.3432 c -2.5048 0.9148 -7.5134 2.9316 -7.7184 6.1362 c -0.101 1.5782 2.1222 3.2252 3.1184 4.197 c 3.272 3.1918 12.3304 8.4412 7.574 13.8028 c -0.5784 0.6522 -1.2266 1.2064 -1.974 1.6532 c -1.2678 0.758 -2.599 1.2904 -4 1.747 l -0.2 -0.2 l 0.4 0 c 1.481 -1.1964 3.3878 -1.5934 4.7914 -3.008 c 2.6194 -2.64 1.773 -5.2248 -0.5914 -7.592 c -2.1582 -2.161 -4.6868 -3.877 -7.0078 -5.8522 c -1.1264 -0.9584 -2.5336 -1.9126 -3.0796 -3.3478 c -0.6958 -1.8294 0.5162 -3.8332 1.7752 -5.1144 c 0.4822 -0.4906 1.38 -0.9964 1.5496 -1.7036 c 0.2674 -1.116 -1.1528 -2.8454 -1.856 -3.574 c -2.2196 -2.2992 -4.941 -1.718 -7.7814 -2.2838 c -1.463 -0.2914 -2.97 -1.1076 -4.2 -1.9242 l 0.2 -0.2 l 0.2 -0.2 c 2.9762 1.7406 6.4954 1.5392 9.8 1.8 l 0 -0.4 c -1.094 -1.0026 -5.1084 -4.6736 -4.6 -6 l 0.4 0.2 c 1.8614 1.3264 3.7308 2.5654 5.14 4.4 c 0.674 0.8774 0.964 1.9506 1.6134 2.834 c 1.0706 1.4562 2.5468 2.6472 2.6466 4.566 l 0.4 0 c 2.0056 -1.7426 5.0326 -2.4112 7.6 -1.8 l 0.2 -0.2 c 0.5154 -0.883 1.4504 -0.9506 2.4 -0.8 l 0 -0.6 c 0.957 -1.8936 1.5228 -4.112 1.8826 -6.2 c 0.207 -1.2016 0.1496 -2.8242 0.9174 -3.8 m -0.6 4.6 l 0.2 0.2 l -0.2 -0.2 m -8.579 10.0984 c 1.1608 -0.2476 1.7986 1.5392 0.558 1.8342 c -1.2578 0.299 -1.8322 -1.5622 -0.558 -1.8342 m -4.021 26.3016 l -0.2 0.2 l 0.2 -0.2 m -2.8 1 l -0.2 0.2 l 0.2 -6.8 z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
