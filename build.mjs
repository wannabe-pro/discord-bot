import esbuild from 'esbuild'

esbuild.buildSync({
    absWorkingDir: process.cwd(),
    entryPoints: ['src/index.ts'],
    minifyIdentifiers: true,
    minifyWhitespace: true,
    minifySyntax: false,
    outfile: 'dist/index.js',
    platform: 'node',
    keepNames: true,
    format: 'cjs',
    bundle: true
})
