// eslint.config.mjs
export default {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',       // Disable the "no unused vars" rule
    'react-hooks/exhaustive-deps': 'off',            // Disable the "missing dependency" rule in useEffect
    '@next/next/no-img-element': 'off',              // Disable the warning about using <img> instead of <Image>
  },
};


