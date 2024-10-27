# CHANGELOG

All notable changes to this project will be documented in this file.



## [1.14.1](https://github.com/shettayyy/class-glue/compare/v1.14.0...v1.14.1) (2024-10-27)


### Documentation

* provide a readme guide with a set of instructions and examples ([#25](https://github.com/shettayyy/class-glue/issues/25)) ([b22454c](https://github.com/shettayyy/class-glue/commit/b22454c62a8b3fca7bee00679b4562ccf2e266e9))

## [1.14.0](https://github.com/shettayyy/class-glue/compare/v1.13.1...v1.14.0) (2024-10-22)


### Features

* update CONTRIBUTING.md ([#23](https://github.com/shettayyy/class-glue/issues/23)) ([cd33327](https://github.com/shettayyy/class-glue/commit/cd33327b2b3ecd202a157214a4e642b0b651d589))


### Chores

* update CHANGELOG.md and refactor to use clgl method ([31bc219](https://github.com/shettayyy/class-glue/commit/31bc219abc9a3469a42bf2f577b0ae168357aef9))

## [1.13.1](https://github.com/shettayyy/class-glue/compare/v1.13.0...v1.13.1) (2024-10-18)


### Refactors

* update release actions ([#21](https://github.com/shettayyy/class-glue/issues/21)) ([00cf043](https://github.com/shettayyy/class-glue/commit/00cf043c99f52347890262f7410acddef42c815d))

## 1.13.0 (2024-10-18)


### Features

* add an example project to test the library ([bd74d2c](https://github.com/shettayyy/class-glue/commit/bd74d2cf7ad97be7c6e4c2d432483b30f5bad49d))
* add comprehensive tests for createClassX argument handling scenarios in merge-styles.test.ts ([50dbc40](https://github.com/shettayyy/class-glue/commit/50dbc40f0ada42e86185f1716774dbc09f845589))
* add createClassXStyles for dynamic styling in App component ([7f92e1a](https://github.com/shettayyy/class-glue/commit/7f92e1a6ff4e0cd94416b04968d19437448ae989))
* add the necessary css classes for demo ([3821190](https://github.com/shettayyy/class-glue/commit/38211902a8e4d70026835ed89e8b8e9f07d8a4d7))
* allow developers to watch changes while contributing ([f58d871](https://github.com/shettayyy/class-glue/commit/f58d871eff94b8263cc40282abb2b20301ad6162))
* bump version to 1.10.0 in package.json and package-lock.json for class-glue ([a5d4617](https://github.com/shettayyy/class-glue/commit/a5d4617191de735532afe361c32280253875efb6))
* change the title of the page ([ae30eac](https://github.com/shettayyy/class-glue/commit/ae30eac01d14172fb16f33f96a5f5698352c0e42))
* clean up merge-styles.ts by removing unused ClassValue type definition and adding type import ([4b96624](https://github.com/shettayyy/class-glue/commit/4b96624bd43784645806474db3986436e6cd4f19))
* create 2 more lib for sring and object-str concat ([34bb281](https://github.com/shettayyy/class-glue/commit/34bb28166e9de7eb7fa2658af9be56f4554f4d62))
* create a class-x util for string concat ([1c1448f](https://github.com/shettayyy/class-glue/commit/1c1448f37618feaf144fd1527c7dbbe4ddbee476))
* enhance createClassX for improved argument handling ([520780a](https://github.com/shettayyy/class-glue/commit/520780a16e6e191d400524b2ddcaadc2e97d84e1))
* export the clgl method by default ([d38a4ce](https://github.com/shettayyy/class-glue/commit/d38a4ce19d8f13a506212f17c2531013f9cb2fec))
* implement keys-to-strings utility and remove deprecated object-to-string functionality ([2147cd0](https://github.com/shettayyy/class-glue/commit/2147cd0b5f890885a4d777fea375fd1f38325028))
* initial commit ([18083d9](https://github.com/shettayyy/class-glue/commit/18083d9bc32432907d06e79f20ff3d5c51febca3))
* provide a demo using styles from css modules ([bbf306f](https://github.com/shettayyy/class-glue/commit/bbf306fd2c97b5360a99442abcfd4fca370d7554))
* rename merge-strings to join-strings and update package.json references ([7eb1b6a](https://github.com/shettayyy/class-glue/commit/7eb1b6a849f7ce6532ddf55218b5fa2d56e64154))
* squash and merge examples and new utility file ([06b59aa](https://github.com/shettayyy/class-glue/commit/06b59aa2a8db769c9eb0cd8c31f263d9cbab6330))
* update classX utility to combine style objects and add createClassX for dynamic style handling ([5503c79](https://github.com/shettayyy/class-glue/commit/5503c794a48991b71491c59ff6b55402295b2beb))
* write test cases with 100% coverage ([65fc570](https://github.com/shettayyy/class-glue/commit/65fc570900cb7da4ed96fc54b8d406bea3d3a266))


### Bug Fixes

* update workflow step name to be more descriptive for creating a PR ([#17](https://github.com/shettayyy/class-glue/issues/17)) ([6bc12aa](https://github.com/shettayyy/class-glue/commit/6bc12aa863ae10d0997cdc06de51b13fdf9d1e3f))


### Chores

* add changelog generation and detailed PR template for release process ([589a08c](https://github.com/shettayyy/class-glue/commit/589a08c669e53ac1468f1ce4f5d88d0532d1803c))
* add debugging output and check for version changes ([954d9e5](https://github.com/shettayyy/class-glue/commit/954d9e59445cbee90906f4bd1f4e5d3e51bb5827))
* add fallback for biome CLI installation in pr-checks.yml to ensure CI robustness ([79dee42](https://github.com/shettayyy/class-glue/commit/79dee42e9341d604eb25565bf81138fdb9142fd5))
* add permissions for contents, issues, and pull-requests in create-release-branch ([f891274](https://github.com/shettayyy/class-glue/commit/f891274146b3618cfa710279af84ab56c397a6ed))
* add Rollup installation as fallback in pr-checks.yml to improve CI stability ([2a76b24](https://github.com/shettayyy/class-glue/commit/2a76b24500fbe1162407e5734ae0bf9061cf6361))
* add sponsorship badge to README and update funding information in FUNDING.yml ([1ed6c2b](https://github.com/shettayyy/class-glue/commit/1ed6c2b9a3637c30ec10fcca6227c05674390ec3))
* adjust dependency installation order in pr-checks.yml for improved CI reliability ([36b2ba8](https://github.com/shettayyy/class-glue/commit/36b2ba8a8863defba6169ec756333a131f225a84))
* allow providing umd builds and perform PR checks ([#5](https://github.com/shettayyy/class-glue/issues/5)) ([4e4ac87](https://github.com/shettayyy/class-glue/commit/4e4ac87e21aae2b14f4af343b9425bd7a5bd1ee7))
* allow untracked files to be added in .release-it.json during release process ([3cb7fd7](https://github.com/shettayyy/class-glue/commit/3cb7fd7a50d6ec07127125618ff48eda06a1f50a))
* bump version from 1.1.0 to 1.2.0 in package.json and package-lock.json ([8e233bc](https://github.com/shettayyy/class-glue/commit/8e233bc7838cfe2e2555719f7aa8973446071166))
* bump version from 1.2.0 to 1.4.0 in package.json and package-lock.json ([7b48494](https://github.com/shettayyy/class-glue/commit/7b48494b9b82720771ecde36e994949bc950e1a8))
* bump version from 1.4.0 to 1.5.0 in package.json and package-lock.json ([c2dd218](https://github.com/shettayyy/class-glue/commit/c2dd218757045ba14e441955f87c85e9cbb57717))
* bump version from 1.5.0 to 1.6.0 in package.json and package-lock.json ([a1fcaba](https://github.com/shettayyy/class-glue/commit/a1fcabac4f4842f726751946d83b324c0677d5bb))
* bump version from 1.6.0 to 1.7.0 in package.json and package-lock.json ([ad9c217](https://github.com/shettayyy/class-glue/commit/ad9c217f92d009b7d9ccf56fb4ddb587821b9cf5))
* delete old support_links.yaml; links consolidated into config.yaml ([df402fc](https://github.com/shettayyy/class-glue/commit/df402fcc274b715ddb03b344f506d53ab0884fe6))
* disable Husky during CI checks for pull requests in pr-checks.yml ([4963a4b](https://github.com/shettayyy/class-glue/commit/4963a4b76a9d68cc84e0c75ccdae823beaa0c7cd))
* enable Husky during release workflow in release.yml and disable it in pr-checks.yml ([d983fe9](https://github.com/shettayyy/class-glue/commit/d983fe978282ec7f81cf014807aca536b9ab1a86))
* enhance CI script in pr-checks.yml with npm ci and lint:ci ([968899e](https://github.com/shettayyy/class-glue/commit/968899eceda477fad4f7701e91e3833d5f36cd6e))
* enhance create-release-branch workflow to check for changes ([c3da965](https://github.com/shettayyy/class-glue/commit/c3da965471cec3a838541abd9dd02ee63d3c36c3))
* enhance create-release-branch workflow with separate steps ([e25d1db](https://github.com/shettayyy/class-glue/commit/e25d1db262c8044dd8725d5491254f51c76b4dbc))
* enhance release workflow to add Rollup installation step in GitHub Actions ([7d7cd97](https://github.com/shettayyy/class-glue/commit/7d7cd97665cfa95e8e794c8c47e2333ba0b6ffa2))
* modify create-release-branch workflow to install rollup on Linux ([3f2f782](https://github.com/shettayyy/class-glue/commit/3f2f782ba8416bf47cc7801dbc5f97ec76c185e2))
* modify npm install command in create-release-branch ([90bcc85](https://github.com/shettayyy/class-glue/commit/90bcc8507e54f83dcd287a453b9104d4e3caaa30))
* modify release workflow to create branches based on merged pull requests ([307cb19](https://github.com/shettayyy/class-glue/commit/307cb19142070d8cefb53f292f428cd546253cc4))
* refactor create-release-branch workflow to determine version ([e691055](https://github.com/shettayyy/class-glue/commit/e6910557f4f7d247a96e0aed0c80cf40c026d65e))
* release v1.11.0 ([#16](https://github.com/shettayyy/class-glue/issues/16)) ([82ab936](https://github.com/shettayyy/class-glue/commit/82ab936e2a80b3b9e4a8db89b5cbeb3f9c684133))
* release v1.12.0 ([#18](https://github.com/shettayyy/class-glue/issues/18)) ([5a6a822](https://github.com/shettayyy/class-glue/commit/5a6a822ebf0069365d9f08620b79d41293206d48))
* remove enhancement PR template and update contributing guidelines ([#4](https://github.com/shettayyy/class-glue/issues/4)) ([4d211f5](https://github.com/shettayyy/class-glue/commit/4d211f5c7612dbf9b320f679a60c715659af171b))
* remove obsolete issue templates for bugs and features ([fdc1da4](https://github.com/shettayyy/class-glue/commit/fdc1da427d1468e5d1ae735f039e71d7452a2c94))
* remove option to add untracked files in .release-it.json during release process ([0ad0ff6](https://github.com/shettayyy/class-glue/commit/0ad0ff6b1f410461d6311826973029cb2153b8ee))
* remove redundant links.yaml template and consolidate contact links into support_links.yaml ([d82d488](https://github.com/shettayyy/class-glue/commit/d82d48835b72466c51c12ad3a2796bffc1b889a6))
* rephrase a name of the action in create-release-branch.yml ([#19](https://github.com/shettayyy/class-glue/issues/19)) ([29ceb45](https://github.com/shettayyy/class-glue/commit/29ceb45eb444970613086287a6b25a1947563085))
* set HUSKY env var and adjust permissions in create-release-branch workflow ([828ae04](https://github.com/shettayyy/class-glue/commit/828ae04c8a37a0e697f26bf984e258a97a9d28a1))
* set HUSKY environment variable to 0 in create-release-branch workflow for GitHub Actions ([d3c3a15](https://github.com/shettayyy/class-glue/commit/d3c3a15539f62299dacc5b38ea54928b1bdb3387))
* simplify biome npm installation in pr-checks.yml by updating package reference ([4601d1a](https://github.com/shettayyy/class-glue/commit/4601d1a4c92ab3a170dbb0b421f1150cc9bcb707))
* streamline create-release-branch workflow for PR creation and checkout process ([602334c](https://github.com/shettayyy/class-glue/commit/602334cb8a687ff92ddc6ca9f575bf2ad129b407))
* streamline npm install command in pr-checks.yml ([07570fb](https://github.com/shettayyy/class-glue/commit/07570fb41c1c3f7f11426776ccd990867296a786))
* update .release-it.json to allow non-clean working dir ([9c9cc0a](https://github.com/shettayyy/class-glue/commit/9c9cc0aaa2c051973c6e84f43f83d530fad24c12))
* update @biomejs/cli-linux-x64 version in workflows and package files ([6f8a430](https://github.com/shettayyy/class-glue/commit/6f8a430a57875f2be693e84a24d6ddeecaf6e069))
* update author field in package.json with detailed information (name, email, and GitHub URL) ([019f5f9](https://github.com/shettayyy/class-glue/commit/019f5f92130f444a36e550401285645c088d909e))
* update create-release-branch workflow to improve formatting ([aea0fde](https://github.com/shettayyy/class-glue/commit/aea0fdece76fdb92a8d00dc6f806f4a14713eda9))
* update create-release-branch workflow to include PR creation ([ee709d5](https://github.com/shettayyy/class-glue/commit/ee709d5237ad2ef672716ea63f004964225fe484))
* update create-release-branch workflow to use PERSONAL_ACCESS_TOKEN ([89786bf](https://github.com/shettayyy/class-glue/commit/89786bf320fdb1ac0027733b92cf6935b66c9a88))
* update package version to 1.1.0 in package.json and package-lock.json for release ([a878453](https://github.com/shettayyy/class-glue/commit/a878453f296b60a39d8de63ee7f430d0ec988fb4))
* update pr-checks.yml to include additional npm installations for Rollup and Biome ([1c3eed0](https://github.com/shettayyy/class-glue/commit/1c3eed063605b3e937930b9c7b647633c854fb68))
* update release workflow to improve GitHub Actions integration ([c91d2df](https://github.com/shettayyy/class-glue/commit/c91d2df496fb42435b0a53781abf4441af5ccfe1))
* update release workflow to streamline git configuration ([07e8230](https://github.com/shettayyy/class-glue/commit/07e8230c80b36a32b928dd8a59fe6d553df42abb))
* update release workflow to trigger on closed PRs ([3e38998](https://github.com/shettayyy/class-glue/commit/3e38998215d18046068b95535720eb7a9acf858c))
* update Rollup dependencies in workflows and package files to enhance CI stability ([d16c8ed](https://github.com/shettayyy/class-glue/commit/d16c8ed06e92c5d8ff07990823e063dab52f77e8))


### Documentation

* add support and resource links to issue template for better project engagement ([b5381d0](https://github.com/shettayyy/class-glue/commit/b5381d05a0c9360a2b9918567cb52fa259962178))
* correct phrasing in PR template to improve clarity on breaking changes ([cc0af22](https://github.com/shettayyy/class-glue/commit/cc0af2267f002f771a9a524379d816e925f64da5))


### Refactors

* add 'git status' command to pre-init hook for enhanced diagnostics in .release-it.json ([8c3abf0](https://github.com/shettayyy/class-glue/commit/8c3abf0fee649580b7fbd1d56707f10e19f55bc5))
* add 'git status' command to pre-init hook in .release-it.json ([1ac6a0b](https://github.com/shettayyy/class-glue/commit/1ac6a0b8ed78914cdb9d7ba42bdad26d5cd62fe7))
* add pre-init hook to refresh git index in .release-it.json ([5d376f9](https://github.com/shettayyy/class-glue/commit/5d376f95d3902f63fa7613a132a2dd9bb9e64a51))
* add requireBranch field to .release-it.json for release process validation ([6768182](https://github.com/shettayyy/class-glue/commit/67681827a5775996397c2d5ca66061cffa88c244))
* allow dirty working directory for release-it in .release-it.json ([cd39086](https://github.com/shettayyy/class-glue/commit/cd390865daecafce463968c328ea7b057b64dfa2))
* change global name from 'ClassGlue' to 'clgl' for UMD builds in build.js ([0c72508](https://github.com/shettayyy/class-glue/commit/0c7250837bdff1cbe698214fe8b15ea046d98cb6))
* change the content of the instruction ([45c2d5d](https://github.com/shettayyy/class-glue/commit/45c2d5d2ea8fc5b1dfdb2a3e465fbf9b7da38835))
* configure Git user and commit build artifacts in release workflow ([7844c49](https://github.com/shettayyy/class-glue/commit/7844c498c932f105152be2cf1d06c61d975d05a9))
* downgrade @release-it/conventional-changelog to 8.0.2 for compatibility ([142f503](https://github.com/shettayyy/class-glue/commit/142f503afecb74a3fb7baaa6a8a22b7a8cb68b7c))
* enable verbose mode for release-it command in release.yml ([173bcc4](https://github.com/shettayyy/class-glue/commit/173bcc4b11f97f04a77d8744d5b9cd6ac776ede8))
* enhance .release-it.json with improved changelog header ([da4b5b0](https://github.com/shettayyy/class-glue/commit/da4b5b05208e3ba4f864b7d95ffb317a97393621))
* enhance caching and dependency installation in release workflow ([2744b83](https://github.com/shettayyy/class-glue/commit/2744b83bb1b1bd86aa09021eb2fb53468ac75915))
* improve dependency installation process in release workflow to ensure clean installs ([9db3f4c](https://github.com/shettayyy/class-glue/commit/9db3f4c8738a4f0c05c3a642499d680144885d4c))
* move build and test commands to pre-init hook in .release-it.json from release workflow ([666d184](https://github.com/shettayyy/class-glue/commit/666d184df56fc643c8ac841a234df84a0c969197))
* remove Git user configuration and build artifact commit steps from release workflow ([f0d2686](https://github.com/shettayyy/class-glue/commit/f0d2686f19542de407bc45265a6f1238d66350af))
* remove GitHub release configuration from .release-it.json to streamline release process ([6ee5739](https://github.com/shettayyy/class-glue/commit/6ee57396186dd7ed112fbc24bb4229aab912db5e))
* remove requirement for clean working directory in .release-it.json ([b796a43](https://github.com/shettayyy/class-glue/commit/b796a4349a03f9b20b6c60cabb7f03e92ed7dcb6))
* remove unused biomejs CLI dependencies from package-lock.json ([768ef14](https://github.com/shettayyy/class-glue/commit/768ef14ff606bcdf74fdeb0ba02cbecfea71497f))
* remove unused JSDoc parameter and return type ([e6b9932](https://github.com/shettayyy/class-glue/commit/e6b9932005ae18d1aa4e8f95a13efe2be1a0cbb2))
* rename class-x to class-y ([915e1d3](https://github.com/shettayyy/class-glue/commit/915e1d396c64daba70976fd9354753cfdc1297a0))
* rename class-y to class-glue ([960a1b4](https://github.com/shettayyy/class-glue/commit/960a1b4e1a5aa4e23d04bff4f2634bc00ef68748))
* set up Git user config in release.yml for proper commit attribution during releases ([34bacf5](https://github.com/shettayyy/class-glue/commit/34bacf56235229f42421a4aa72ab10272843f347))
* streamline pre-init hook by removing redundant git commands in .release-it.json ([8ec0794](https://github.com/shettayyy/class-glue/commit/8ec0794bf042f232c67cbfdcae6e64d25f620812))
* switch changelog preset to conventionalcommits ([656070f](https://github.com/shettayyy/class-glue/commit/656070f6dda88517afa6013797b2df12a0cdad76))
* update .release-it.json for better npm and GitHub release configurations ([0e41ce2](https://github.com/shettayyy/class-glue/commit/0e41ce209d2a4dd109a43465ab01b40980ec5919))
* update commitPartial format in .release-it.json for clearer changelog entries ([0ec463a](https://github.com/shettayyy/class-glue/commit/0ec463a7a3b54decf6ff9b5a0d3455605eb06ba6))
* update global name from 'clgl' to 'classG' in build.js ([146c585](https://github.com/shettayyy/class-glue/commit/146c585149258b858c0fbc5b29deeabeaab59c8e))
* update references from Class X to Class Glue in HTML and application files ([6643227](https://github.com/shettayyy/class-glue/commit/6643227af80f695a7c06d6e444b7c1ea38cf6ba8))

## 1.12.0 (2024-10-18)


### Features

* add an example project to test the library ([bd74d2c](https://github.com/shettayyy/class-glue/commit/bd74d2cf7ad97be7c6e4c2d432483b30f5bad49d))
* add comprehensive tests for createClassX argument handling scenarios in merge-styles.test.ts ([50dbc40](https://github.com/shettayyy/class-glue/commit/50dbc40f0ada42e86185f1716774dbc09f845589))
* add createClassXStyles for dynamic styling in App component ([7f92e1a](https://github.com/shettayyy/class-glue/commit/7f92e1a6ff4e0cd94416b04968d19437448ae989))
* add the necessary css classes for demo ([3821190](https://github.com/shettayyy/class-glue/commit/38211902a8e4d70026835ed89e8b8e9f07d8a4d7))
* allow developers to watch changes while contributing ([f58d871](https://github.com/shettayyy/class-glue/commit/f58d871eff94b8263cc40282abb2b20301ad6162))
* bump version to 1.10.0 in package.json and package-lock.json for class-glue ([a5d4617](https://github.com/shettayyy/class-glue/commit/a5d4617191de735532afe361c32280253875efb6))
* change the title of the page ([ae30eac](https://github.com/shettayyy/class-glue/commit/ae30eac01d14172fb16f33f96a5f5698352c0e42))
* clean up merge-styles.ts by removing unused ClassValue type definition and adding type import ([4b96624](https://github.com/shettayyy/class-glue/commit/4b96624bd43784645806474db3986436e6cd4f19))
* create 2 more lib for sring and object-str concat ([34bb281](https://github.com/shettayyy/class-glue/commit/34bb28166e9de7eb7fa2658af9be56f4554f4d62))
* create a class-x util for string concat ([1c1448f](https://github.com/shettayyy/class-glue/commit/1c1448f37618feaf144fd1527c7dbbe4ddbee476))
* enhance createClassX for improved argument handling ([520780a](https://github.com/shettayyy/class-glue/commit/520780a16e6e191d400524b2ddcaadc2e97d84e1))
* export the clgl method by default ([d38a4ce](https://github.com/shettayyy/class-glue/commit/d38a4ce19d8f13a506212f17c2531013f9cb2fec))
* implement keys-to-strings utility and remove deprecated object-to-string functionality ([2147cd0](https://github.com/shettayyy/class-glue/commit/2147cd0b5f890885a4d777fea375fd1f38325028))
* initial commit ([18083d9](https://github.com/shettayyy/class-glue/commit/18083d9bc32432907d06e79f20ff3d5c51febca3))
* provide a demo using styles from css modules ([bbf306f](https://github.com/shettayyy/class-glue/commit/bbf306fd2c97b5360a99442abcfd4fca370d7554))
* rename merge-strings to join-strings and update package.json references ([7eb1b6a](https://github.com/shettayyy/class-glue/commit/7eb1b6a849f7ce6532ddf55218b5fa2d56e64154))
* squash and merge examples and new utility file ([06b59aa](https://github.com/shettayyy/class-glue/commit/06b59aa2a8db769c9eb0cd8c31f263d9cbab6330))
* update classX utility to combine style objects and add createClassX for dynamic style handling ([5503c79](https://github.com/shettayyy/class-glue/commit/5503c794a48991b71491c59ff6b55402295b2beb))
* write test cases with 100% coverage ([65fc570](https://github.com/shettayyy/class-glue/commit/65fc570900cb7da4ed96fc54b8d406bea3d3a266))


### Bug Fixes

* update workflow step name to be more descriptive for creating a PR ([#17](https://github.com/shettayyy/class-glue/issues/17)) ([6bc12aa](https://github.com/shettayyy/class-glue/commit/6bc12aa863ae10d0997cdc06de51b13fdf9d1e3f))


### Chores

* add changelog generation and detailed PR template for release process ([589a08c](https://github.com/shettayyy/class-glue/commit/589a08c669e53ac1468f1ce4f5d88d0532d1803c))
* add debugging output and check for version changes ([954d9e5](https://github.com/shettayyy/class-glue/commit/954d9e59445cbee90906f4bd1f4e5d3e51bb5827))
* add fallback for biome CLI installation in pr-checks.yml to ensure CI robustness ([79dee42](https://github.com/shettayyy/class-glue/commit/79dee42e9341d604eb25565bf81138fdb9142fd5))
* add permissions for contents, issues, and pull-requests in create-release-branch ([f891274](https://github.com/shettayyy/class-glue/commit/f891274146b3618cfa710279af84ab56c397a6ed))
* add Rollup installation as fallback in pr-checks.yml to improve CI stability ([2a76b24](https://github.com/shettayyy/class-glue/commit/2a76b24500fbe1162407e5734ae0bf9061cf6361))
* add sponsorship badge to README and update funding information in FUNDING.yml ([1ed6c2b](https://github.com/shettayyy/class-glue/commit/1ed6c2b9a3637c30ec10fcca6227c05674390ec3))
* adjust dependency installation order in pr-checks.yml for improved CI reliability ([36b2ba8](https://github.com/shettayyy/class-glue/commit/36b2ba8a8863defba6169ec756333a131f225a84))
* allow providing umd builds and perform PR checks ([#5](https://github.com/shettayyy/class-glue/issues/5)) ([4e4ac87](https://github.com/shettayyy/class-glue/commit/4e4ac87e21aae2b14f4af343b9425bd7a5bd1ee7))
* allow untracked files to be added in .release-it.json during release process ([3cb7fd7](https://github.com/shettayyy/class-glue/commit/3cb7fd7a50d6ec07127125618ff48eda06a1f50a))
* bump version from 1.1.0 to 1.2.0 in package.json and package-lock.json ([8e233bc](https://github.com/shettayyy/class-glue/commit/8e233bc7838cfe2e2555719f7aa8973446071166))
* bump version from 1.2.0 to 1.4.0 in package.json and package-lock.json ([7b48494](https://github.com/shettayyy/class-glue/commit/7b48494b9b82720771ecde36e994949bc950e1a8))
* bump version from 1.4.0 to 1.5.0 in package.json and package-lock.json ([c2dd218](https://github.com/shettayyy/class-glue/commit/c2dd218757045ba14e441955f87c85e9cbb57717))
* bump version from 1.5.0 to 1.6.0 in package.json and package-lock.json ([a1fcaba](https://github.com/shettayyy/class-glue/commit/a1fcabac4f4842f726751946d83b324c0677d5bb))
* bump version from 1.6.0 to 1.7.0 in package.json and package-lock.json ([ad9c217](https://github.com/shettayyy/class-glue/commit/ad9c217f92d009b7d9ccf56fb4ddb587821b9cf5))
* delete old support_links.yaml; links consolidated into config.yaml ([df402fc](https://github.com/shettayyy/class-glue/commit/df402fcc274b715ddb03b344f506d53ab0884fe6))
* disable Husky during CI checks for pull requests in pr-checks.yml ([4963a4b](https://github.com/shettayyy/class-glue/commit/4963a4b76a9d68cc84e0c75ccdae823beaa0c7cd))
* enable Husky during release workflow in release.yml and disable it in pr-checks.yml ([d983fe9](https://github.com/shettayyy/class-glue/commit/d983fe978282ec7f81cf014807aca536b9ab1a86))
* enhance CI script in pr-checks.yml with npm ci and lint:ci ([968899e](https://github.com/shettayyy/class-glue/commit/968899eceda477fad4f7701e91e3833d5f36cd6e))
* enhance create-release-branch workflow to check for changes ([c3da965](https://github.com/shettayyy/class-glue/commit/c3da965471cec3a838541abd9dd02ee63d3c36c3))
* enhance create-release-branch workflow with separate steps ([e25d1db](https://github.com/shettayyy/class-glue/commit/e25d1db262c8044dd8725d5491254f51c76b4dbc))
* enhance release workflow to add Rollup installation step in GitHub Actions ([7d7cd97](https://github.com/shettayyy/class-glue/commit/7d7cd97665cfa95e8e794c8c47e2333ba0b6ffa2))
* modify create-release-branch workflow to install rollup on Linux ([3f2f782](https://github.com/shettayyy/class-glue/commit/3f2f782ba8416bf47cc7801dbc5f97ec76c185e2))
* modify npm install command in create-release-branch ([90bcc85](https://github.com/shettayyy/class-glue/commit/90bcc8507e54f83dcd287a453b9104d4e3caaa30))
* modify release workflow to create branches based on merged pull requests ([307cb19](https://github.com/shettayyy/class-glue/commit/307cb19142070d8cefb53f292f428cd546253cc4))
* refactor create-release-branch workflow to determine version ([e691055](https://github.com/shettayyy/class-glue/commit/e6910557f4f7d247a96e0aed0c80cf40c026d65e))
* release v1.11.0 ([#16](https://github.com/shettayyy/class-glue/issues/16)) ([82ab936](https://github.com/shettayyy/class-glue/commit/82ab936e2a80b3b9e4a8db89b5cbeb3f9c684133))
* remove enhancement PR template and update contributing guidelines ([#4](https://github.com/shettayyy/class-glue/issues/4)) ([4d211f5](https://github.com/shettayyy/class-glue/commit/4d211f5c7612dbf9b320f679a60c715659af171b))
* remove obsolete issue templates for bugs and features ([fdc1da4](https://github.com/shettayyy/class-glue/commit/fdc1da427d1468e5d1ae735f039e71d7452a2c94))
* remove option to add untracked files in .release-it.json during release process ([0ad0ff6](https://github.com/shettayyy/class-glue/commit/0ad0ff6b1f410461d6311826973029cb2153b8ee))
* remove redundant links.yaml template and consolidate contact links into support_links.yaml ([d82d488](https://github.com/shettayyy/class-glue/commit/d82d48835b72466c51c12ad3a2796bffc1b889a6))
* set HUSKY env var and adjust permissions in create-release-branch workflow ([828ae04](https://github.com/shettayyy/class-glue/commit/828ae04c8a37a0e697f26bf984e258a97a9d28a1))
* set HUSKY environment variable to 0 in create-release-branch workflow for GitHub Actions ([d3c3a15](https://github.com/shettayyy/class-glue/commit/d3c3a15539f62299dacc5b38ea54928b1bdb3387))
* simplify biome npm installation in pr-checks.yml by updating package reference ([4601d1a](https://github.com/shettayyy/class-glue/commit/4601d1a4c92ab3a170dbb0b421f1150cc9bcb707))
* streamline create-release-branch workflow for PR creation and checkout process ([602334c](https://github.com/shettayyy/class-glue/commit/602334cb8a687ff92ddc6ca9f575bf2ad129b407))
* streamline npm install command in pr-checks.yml ([07570fb](https://github.com/shettayyy/class-glue/commit/07570fb41c1c3f7f11426776ccd990867296a786))
* update .release-it.json to allow non-clean working dir ([9c9cc0a](https://github.com/shettayyy/class-glue/commit/9c9cc0aaa2c051973c6e84f43f83d530fad24c12))
* update @biomejs/cli-linux-x64 version in workflows and package files ([6f8a430](https://github.com/shettayyy/class-glue/commit/6f8a430a57875f2be693e84a24d6ddeecaf6e069))
* update author field in package.json with detailed information (name, email, and GitHub URL) ([019f5f9](https://github.com/shettayyy/class-glue/commit/019f5f92130f444a36e550401285645c088d909e))
* update create-release-branch workflow to improve formatting ([aea0fde](https://github.com/shettayyy/class-glue/commit/aea0fdece76fdb92a8d00dc6f806f4a14713eda9))
* update create-release-branch workflow to include PR creation ([ee709d5](https://github.com/shettayyy/class-glue/commit/ee709d5237ad2ef672716ea63f004964225fe484))
* update create-release-branch workflow to use PERSONAL_ACCESS_TOKEN ([89786bf](https://github.com/shettayyy/class-glue/commit/89786bf320fdb1ac0027733b92cf6935b66c9a88))
* update package version to 1.1.0 in package.json and package-lock.json for release ([a878453](https://github.com/shettayyy/class-glue/commit/a878453f296b60a39d8de63ee7f430d0ec988fb4))
* update pr-checks.yml to include additional npm installations for Rollup and Biome ([1c3eed0](https://github.com/shettayyy/class-glue/commit/1c3eed063605b3e937930b9c7b647633c854fb68))
* update release workflow to improve GitHub Actions integration ([c91d2df](https://github.com/shettayyy/class-glue/commit/c91d2df496fb42435b0a53781abf4441af5ccfe1))
* update release workflow to streamline git configuration ([07e8230](https://github.com/shettayyy/class-glue/commit/07e8230c80b36a32b928dd8a59fe6d553df42abb))
* update release workflow to trigger on closed PRs ([3e38998](https://github.com/shettayyy/class-glue/commit/3e38998215d18046068b95535720eb7a9acf858c))
* update Rollup dependencies in workflows and package files to enhance CI stability ([d16c8ed](https://github.com/shettayyy/class-glue/commit/d16c8ed06e92c5d8ff07990823e063dab52f77e8))


### Documentation

* add support and resource links to issue template for better project engagement ([b5381d0](https://github.com/shettayyy/class-glue/commit/b5381d05a0c9360a2b9918567cb52fa259962178))
* correct phrasing in PR template to improve clarity on breaking changes ([cc0af22](https://github.com/shettayyy/class-glue/commit/cc0af2267f002f771a9a524379d816e925f64da5))


### Refactors

* add 'git status' command to pre-init hook for enhanced diagnostics in .release-it.json ([8c3abf0](https://github.com/shettayyy/class-glue/commit/8c3abf0fee649580b7fbd1d56707f10e19f55bc5))
* add 'git status' command to pre-init hook in .release-it.json ([1ac6a0b](https://github.com/shettayyy/class-glue/commit/1ac6a0b8ed78914cdb9d7ba42bdad26d5cd62fe7))
* add pre-init hook to refresh git index in .release-it.json ([5d376f9](https://github.com/shettayyy/class-glue/commit/5d376f95d3902f63fa7613a132a2dd9bb9e64a51))
* add requireBranch field to .release-it.json for release process validation ([6768182](https://github.com/shettayyy/class-glue/commit/67681827a5775996397c2d5ca66061cffa88c244))
* allow dirty working directory for release-it in .release-it.json ([cd39086](https://github.com/shettayyy/class-glue/commit/cd390865daecafce463968c328ea7b057b64dfa2))
* change global name from 'ClassGlue' to 'clgl' for UMD builds in build.js ([0c72508](https://github.com/shettayyy/class-glue/commit/0c7250837bdff1cbe698214fe8b15ea046d98cb6))
* change the content of the instruction ([45c2d5d](https://github.com/shettayyy/class-glue/commit/45c2d5d2ea8fc5b1dfdb2a3e465fbf9b7da38835))
* configure Git user and commit build artifacts in release workflow ([7844c49](https://github.com/shettayyy/class-glue/commit/7844c498c932f105152be2cf1d06c61d975d05a9))
* downgrade @release-it/conventional-changelog to 8.0.2 for compatibility ([142f503](https://github.com/shettayyy/class-glue/commit/142f503afecb74a3fb7baaa6a8a22b7a8cb68b7c))
* enable verbose mode for release-it command in release.yml ([173bcc4](https://github.com/shettayyy/class-glue/commit/173bcc4b11f97f04a77d8744d5b9cd6ac776ede8))
* enhance .release-it.json with improved changelog header ([da4b5b0](https://github.com/shettayyy/class-glue/commit/da4b5b05208e3ba4f864b7d95ffb317a97393621))
* enhance caching and dependency installation in release workflow ([2744b83](https://github.com/shettayyy/class-glue/commit/2744b83bb1b1bd86aa09021eb2fb53468ac75915))
* improve dependency installation process in release workflow to ensure clean installs ([9db3f4c](https://github.com/shettayyy/class-glue/commit/9db3f4c8738a4f0c05c3a642499d680144885d4c))
* move build and test commands to pre-init hook in .release-it.json from release workflow ([666d184](https://github.com/shettayyy/class-glue/commit/666d184df56fc643c8ac841a234df84a0c969197))
* remove Git user configuration and build artifact commit steps from release workflow ([f0d2686](https://github.com/shettayyy/class-glue/commit/f0d2686f19542de407bc45265a6f1238d66350af))
* remove GitHub release configuration from .release-it.json to streamline release process ([6ee5739](https://github.com/shettayyy/class-glue/commit/6ee57396186dd7ed112fbc24bb4229aab912db5e))
* remove requirement for clean working directory in .release-it.json ([b796a43](https://github.com/shettayyy/class-glue/commit/b796a4349a03f9b20b6c60cabb7f03e92ed7dcb6))
* remove unused biomejs CLI dependencies from package-lock.json ([768ef14](https://github.com/shettayyy/class-glue/commit/768ef14ff606bcdf74fdeb0ba02cbecfea71497f))
* remove unused JSDoc parameter and return type ([e6b9932](https://github.com/shettayyy/class-glue/commit/e6b9932005ae18d1aa4e8f95a13efe2be1a0cbb2))
* rename class-x to class-y ([915e1d3](https://github.com/shettayyy/class-glue/commit/915e1d396c64daba70976fd9354753cfdc1297a0))
* rename class-y to class-glue ([960a1b4](https://github.com/shettayyy/class-glue/commit/960a1b4e1a5aa4e23d04bff4f2634bc00ef68748))
* set up Git user config in release.yml for proper commit attribution during releases ([34bacf5](https://github.com/shettayyy/class-glue/commit/34bacf56235229f42421a4aa72ab10272843f347))
* streamline pre-init hook by removing redundant git commands in .release-it.json ([8ec0794](https://github.com/shettayyy/class-glue/commit/8ec0794bf042f232c67cbfdcae6e64d25f620812))
* switch changelog preset to conventionalcommits ([656070f](https://github.com/shettayyy/class-glue/commit/656070f6dda88517afa6013797b2df12a0cdad76))
* update .release-it.json for better npm and GitHub release configurations ([0e41ce2](https://github.com/shettayyy/class-glue/commit/0e41ce209d2a4dd109a43465ab01b40980ec5919))
* update commitPartial format in .release-it.json for clearer changelog entries ([0ec463a](https://github.com/shettayyy/class-glue/commit/0ec463a7a3b54decf6ff9b5a0d3455605eb06ba6))
* update global name from 'clgl' to 'classG' in build.js ([146c585](https://github.com/shettayyy/class-glue/commit/146c585149258b858c0fbc5b29deeabeaab59c8e))
* update references from Class X to Class Glue in HTML and application files ([6643227](https://github.com/shettayyy/class-glue/commit/6643227af80f695a7c06d6e444b7c1ea38cf6ba8))

## 1.11.0 (2024-10-18)


### Features

* add an example project to test the library ([bd74d2c](https://github.com/shettayyy/class-glue/commit/bd74d2cf7ad97be7c6e4c2d432483b30f5bad49d))
* add comprehensive tests for createClassX argument handling scenarios in merge-styles.test.ts ([50dbc40](https://github.com/shettayyy/class-glue/commit/50dbc40f0ada42e86185f1716774dbc09f845589))
* add createClassXStyles for dynamic styling in App component ([7f92e1a](https://github.com/shettayyy/class-glue/commit/7f92e1a6ff4e0cd94416b04968d19437448ae989))
* add the necessary css classes for demo ([3821190](https://github.com/shettayyy/class-glue/commit/38211902a8e4d70026835ed89e8b8e9f07d8a4d7))
* allow developers to watch changes while contributing ([f58d871](https://github.com/shettayyy/class-glue/commit/f58d871eff94b8263cc40282abb2b20301ad6162))
* bump version to 1.10.0 in package.json and package-lock.json for class-glue ([a5d4617](https://github.com/shettayyy/class-glue/commit/a5d4617191de735532afe361c32280253875efb6))
* change the title of the page ([ae30eac](https://github.com/shettayyy/class-glue/commit/ae30eac01d14172fb16f33f96a5f5698352c0e42))
* clean up merge-styles.ts by removing unused ClassValue type definition and adding type import ([4b96624](https://github.com/shettayyy/class-glue/commit/4b96624bd43784645806474db3986436e6cd4f19))
* create 2 more lib for sring and object-str concat ([34bb281](https://github.com/shettayyy/class-glue/commit/34bb28166e9de7eb7fa2658af9be56f4554f4d62))
* create a class-x util for string concat ([1c1448f](https://github.com/shettayyy/class-glue/commit/1c1448f37618feaf144fd1527c7dbbe4ddbee476))
* enhance createClassX for improved argument handling ([520780a](https://github.com/shettayyy/class-glue/commit/520780a16e6e191d400524b2ddcaadc2e97d84e1))
* export the clgl method by default ([d38a4ce](https://github.com/shettayyy/class-glue/commit/d38a4ce19d8f13a506212f17c2531013f9cb2fec))
* implement keys-to-strings utility and remove deprecated object-to-string functionality ([2147cd0](https://github.com/shettayyy/class-glue/commit/2147cd0b5f890885a4d777fea375fd1f38325028))
* initial commit ([18083d9](https://github.com/shettayyy/class-glue/commit/18083d9bc32432907d06e79f20ff3d5c51febca3))
* provide a demo using styles from css modules ([bbf306f](https://github.com/shettayyy/class-glue/commit/bbf306fd2c97b5360a99442abcfd4fca370d7554))
* rename merge-strings to join-strings and update package.json references ([7eb1b6a](https://github.com/shettayyy/class-glue/commit/7eb1b6a849f7ce6532ddf55218b5fa2d56e64154))
* squash and merge examples and new utility file ([06b59aa](https://github.com/shettayyy/class-glue/commit/06b59aa2a8db769c9eb0cd8c31f263d9cbab6330))
* update classX utility to combine style objects and add createClassX for dynamic style handling ([5503c79](https://github.com/shettayyy/class-glue/commit/5503c794a48991b71491c59ff6b55402295b2beb))
* write test cases with 100% coverage ([65fc570](https://github.com/shettayyy/class-glue/commit/65fc570900cb7da4ed96fc54b8d406bea3d3a266))


### Chores

* add changelog generation and detailed PR template for release process ([589a08c](https://github.com/shettayyy/class-glue/commit/589a08c669e53ac1468f1ce4f5d88d0532d1803c))
* add debugging output and check for version changes ([954d9e5](https://github.com/shettayyy/class-glue/commit/954d9e59445cbee90906f4bd1f4e5d3e51bb5827))
* add fallback for biome CLI installation in pr-checks.yml to ensure CI robustness ([79dee42](https://github.com/shettayyy/class-glue/commit/79dee42e9341d604eb25565bf81138fdb9142fd5))
* add permissions for contents, issues, and pull-requests in create-release-branch ([f891274](https://github.com/shettayyy/class-glue/commit/f891274146b3618cfa710279af84ab56c397a6ed))
* add Rollup installation as fallback in pr-checks.yml to improve CI stability ([2a76b24](https://github.com/shettayyy/class-glue/commit/2a76b24500fbe1162407e5734ae0bf9061cf6361))
* add sponsorship badge to README and update funding information in FUNDING.yml ([1ed6c2b](https://github.com/shettayyy/class-glue/commit/1ed6c2b9a3637c30ec10fcca6227c05674390ec3))
* adjust dependency installation order in pr-checks.yml for improved CI reliability ([36b2ba8](https://github.com/shettayyy/class-glue/commit/36b2ba8a8863defba6169ec756333a131f225a84))
* allow providing umd builds and perform PR checks ([#5](https://github.com/shettayyy/class-glue/issues/5)) ([4e4ac87](https://github.com/shettayyy/class-glue/commit/4e4ac87e21aae2b14f4af343b9425bd7a5bd1ee7))
* allow untracked files to be added in .release-it.json during release process ([3cb7fd7](https://github.com/shettayyy/class-glue/commit/3cb7fd7a50d6ec07127125618ff48eda06a1f50a))
* bump version from 1.1.0 to 1.2.0 in package.json and package-lock.json ([8e233bc](https://github.com/shettayyy/class-glue/commit/8e233bc7838cfe2e2555719f7aa8973446071166))
* bump version from 1.2.0 to 1.4.0 in package.json and package-lock.json ([7b48494](https://github.com/shettayyy/class-glue/commit/7b48494b9b82720771ecde36e994949bc950e1a8))
* bump version from 1.4.0 to 1.5.0 in package.json and package-lock.json ([c2dd218](https://github.com/shettayyy/class-glue/commit/c2dd218757045ba14e441955f87c85e9cbb57717))
* bump version from 1.5.0 to 1.6.0 in package.json and package-lock.json ([a1fcaba](https://github.com/shettayyy/class-glue/commit/a1fcabac4f4842f726751946d83b324c0677d5bb))
* bump version from 1.6.0 to 1.7.0 in package.json and package-lock.json ([ad9c217](https://github.com/shettayyy/class-glue/commit/ad9c217f92d009b7d9ccf56fb4ddb587821b9cf5))
* delete old support_links.yaml; links consolidated into config.yaml ([df402fc](https://github.com/shettayyy/class-glue/commit/df402fcc274b715ddb03b344f506d53ab0884fe6))
* disable Husky during CI checks for pull requests in pr-checks.yml ([4963a4b](https://github.com/shettayyy/class-glue/commit/4963a4b76a9d68cc84e0c75ccdae823beaa0c7cd))
* enable Husky during release workflow in release.yml and disable it in pr-checks.yml ([d983fe9](https://github.com/shettayyy/class-glue/commit/d983fe978282ec7f81cf014807aca536b9ab1a86))
* enhance CI script in pr-checks.yml with npm ci and lint:ci ([968899e](https://github.com/shettayyy/class-glue/commit/968899eceda477fad4f7701e91e3833d5f36cd6e))
* enhance create-release-branch workflow to check for changes ([c3da965](https://github.com/shettayyy/class-glue/commit/c3da965471cec3a838541abd9dd02ee63d3c36c3))
* enhance create-release-branch workflow with separate steps ([e25d1db](https://github.com/shettayyy/class-glue/commit/e25d1db262c8044dd8725d5491254f51c76b4dbc))
* enhance release workflow to add Rollup installation step in GitHub Actions ([7d7cd97](https://github.com/shettayyy/class-glue/commit/7d7cd97665cfa95e8e794c8c47e2333ba0b6ffa2))
* modify create-release-branch workflow to install rollup on Linux ([3f2f782](https://github.com/shettayyy/class-glue/commit/3f2f782ba8416bf47cc7801dbc5f97ec76c185e2))
* modify npm install command in create-release-branch ([90bcc85](https://github.com/shettayyy/class-glue/commit/90bcc8507e54f83dcd287a453b9104d4e3caaa30))
* refactor create-release-branch workflow to determine version ([e691055](https://github.com/shettayyy/class-glue/commit/e6910557f4f7d247a96e0aed0c80cf40c026d65e))
* remove enhancement PR template and update contributing guidelines ([#4](https://github.com/shettayyy/class-glue/issues/4)) ([4d211f5](https://github.com/shettayyy/class-glue/commit/4d211f5c7612dbf9b320f679a60c715659af171b))
* remove obsolete issue templates for bugs and features ([fdc1da4](https://github.com/shettayyy/class-glue/commit/fdc1da427d1468e5d1ae735f039e71d7452a2c94))
* remove option to add untracked files in .release-it.json during release process ([0ad0ff6](https://github.com/shettayyy/class-glue/commit/0ad0ff6b1f410461d6311826973029cb2153b8ee))
* remove redundant links.yaml template and consolidate contact links into support_links.yaml ([d82d488](https://github.com/shettayyy/class-glue/commit/d82d48835b72466c51c12ad3a2796bffc1b889a6))
* set HUSKY env var and adjust permissions in create-release-branch workflow ([828ae04](https://github.com/shettayyy/class-glue/commit/828ae04c8a37a0e697f26bf984e258a97a9d28a1))
* set HUSKY environment variable to 0 in create-release-branch workflow for GitHub Actions ([d3c3a15](https://github.com/shettayyy/class-glue/commit/d3c3a15539f62299dacc5b38ea54928b1bdb3387))
* simplify biome npm installation in pr-checks.yml by updating package reference ([4601d1a](https://github.com/shettayyy/class-glue/commit/4601d1a4c92ab3a170dbb0b421f1150cc9bcb707))
* streamline create-release-branch workflow for PR creation and checkout process ([602334c](https://github.com/shettayyy/class-glue/commit/602334cb8a687ff92ddc6ca9f575bf2ad129b407))
* streamline npm install command in pr-checks.yml ([07570fb](https://github.com/shettayyy/class-glue/commit/07570fb41c1c3f7f11426776ccd990867296a786))
* update .release-it.json to allow non-clean working dir ([9c9cc0a](https://github.com/shettayyy/class-glue/commit/9c9cc0aaa2c051973c6e84f43f83d530fad24c12))
* update @biomejs/cli-linux-x64 version in workflows and package files ([6f8a430](https://github.com/shettayyy/class-glue/commit/6f8a430a57875f2be693e84a24d6ddeecaf6e069))
* update author field in package.json with detailed information (name, email, and GitHub URL) ([019f5f9](https://github.com/shettayyy/class-glue/commit/019f5f92130f444a36e550401285645c088d909e))
* update create-release-branch workflow to improve formatting ([aea0fde](https://github.com/shettayyy/class-glue/commit/aea0fdece76fdb92a8d00dc6f806f4a14713eda9))
* update create-release-branch workflow to include PR creation ([ee709d5](https://github.com/shettayyy/class-glue/commit/ee709d5237ad2ef672716ea63f004964225fe484))
* update create-release-branch workflow to use PERSONAL_ACCESS_TOKEN ([89786bf](https://github.com/shettayyy/class-glue/commit/89786bf320fdb1ac0027733b92cf6935b66c9a88))
* update package version to 1.1.0 in package.json and package-lock.json for release ([a878453](https://github.com/shettayyy/class-glue/commit/a878453f296b60a39d8de63ee7f430d0ec988fb4))
* update pr-checks.yml to include additional npm installations for Rollup and Biome ([1c3eed0](https://github.com/shettayyy/class-glue/commit/1c3eed063605b3e937930b9c7b647633c854fb68))
* update release workflow to improve GitHub Actions integration ([c91d2df](https://github.com/shettayyy/class-glue/commit/c91d2df496fb42435b0a53781abf4441af5ccfe1))
* update release workflow to streamline git configuration ([07e8230](https://github.com/shettayyy/class-glue/commit/07e8230c80b36a32b928dd8a59fe6d553df42abb))
* update release workflow to trigger on closed PRs ([3e38998](https://github.com/shettayyy/class-glue/commit/3e38998215d18046068b95535720eb7a9acf858c))
* update Rollup dependencies in workflows and package files to enhance CI stability ([d16c8ed](https://github.com/shettayyy/class-glue/commit/d16c8ed06e92c5d8ff07990823e063dab52f77e8))


### Documentation

* add support and resource links to issue template for better project engagement ([b5381d0](https://github.com/shettayyy/class-glue/commit/b5381d05a0c9360a2b9918567cb52fa259962178))
* correct phrasing in PR template to improve clarity on breaking changes ([cc0af22](https://github.com/shettayyy/class-glue/commit/cc0af2267f002f771a9a524379d816e925f64da5))


### Refactors

* add 'git status' command to pre-init hook for enhanced diagnostics in .release-it.json ([8c3abf0](https://github.com/shettayyy/class-glue/commit/8c3abf0fee649580b7fbd1d56707f10e19f55bc5))
* add 'git status' command to pre-init hook in .release-it.json ([1ac6a0b](https://github.com/shettayyy/class-glue/commit/1ac6a0b8ed78914cdb9d7ba42bdad26d5cd62fe7))
* add pre-init hook to refresh git index in .release-it.json ([5d376f9](https://github.com/shettayyy/class-glue/commit/5d376f95d3902f63fa7613a132a2dd9bb9e64a51))
* add requireBranch field to .release-it.json for release process validation ([6768182](https://github.com/shettayyy/class-glue/commit/67681827a5775996397c2d5ca66061cffa88c244))
* allow dirty working directory for release-it in .release-it.json ([cd39086](https://github.com/shettayyy/class-glue/commit/cd390865daecafce463968c328ea7b057b64dfa2))
* change global name from 'ClassGlue' to 'clgl' for UMD builds in build.js ([0c72508](https://github.com/shettayyy/class-glue/commit/0c7250837bdff1cbe698214fe8b15ea046d98cb6))
* change the content of the instruction ([45c2d5d](https://github.com/shettayyy/class-glue/commit/45c2d5d2ea8fc5b1dfdb2a3e465fbf9b7da38835))
* configure Git user and commit build artifacts in release workflow ([7844c49](https://github.com/shettayyy/class-glue/commit/7844c498c932f105152be2cf1d06c61d975d05a9))
* downgrade @release-it/conventional-changelog to 8.0.2 for compatibility ([142f503](https://github.com/shettayyy/class-glue/commit/142f503afecb74a3fb7baaa6a8a22b7a8cb68b7c))
* enable verbose mode for release-it command in release.yml ([173bcc4](https://github.com/shettayyy/class-glue/commit/173bcc4b11f97f04a77d8744d5b9cd6ac776ede8))
* enhance .release-it.json with improved changelog header ([da4b5b0](https://github.com/shettayyy/class-glue/commit/da4b5b05208e3ba4f864b7d95ffb317a97393621))
* enhance caching and dependency installation in release workflow ([2744b83](https://github.com/shettayyy/class-glue/commit/2744b83bb1b1bd86aa09021eb2fb53468ac75915))
* improve dependency installation process in release workflow to ensure clean installs ([9db3f4c](https://github.com/shettayyy/class-glue/commit/9db3f4c8738a4f0c05c3a642499d680144885d4c))
* move build and test commands to pre-init hook in .release-it.json from release workflow ([666d184](https://github.com/shettayyy/class-glue/commit/666d184df56fc643c8ac841a234df84a0c969197))
* remove Git user configuration and build artifact commit steps from release workflow ([f0d2686](https://github.com/shettayyy/class-glue/commit/f0d2686f19542de407bc45265a6f1238d66350af))
* remove GitHub release configuration from .release-it.json to streamline release process ([6ee5739](https://github.com/shettayyy/class-glue/commit/6ee57396186dd7ed112fbc24bb4229aab912db5e))
* remove requirement for clean working directory in .release-it.json ([b796a43](https://github.com/shettayyy/class-glue/commit/b796a4349a03f9b20b6c60cabb7f03e92ed7dcb6))
* remove unused biomejs CLI dependencies from package-lock.json ([768ef14](https://github.com/shettayyy/class-glue/commit/768ef14ff606bcdf74fdeb0ba02cbecfea71497f))
* remove unused JSDoc parameter and return type ([e6b9932](https://github.com/shettayyy/class-glue/commit/e6b9932005ae18d1aa4e8f95a13efe2be1a0cbb2))
* rename class-x to class-y ([915e1d3](https://github.com/shettayyy/class-glue/commit/915e1d396c64daba70976fd9354753cfdc1297a0))
* rename class-y to class-glue ([960a1b4](https://github.com/shettayyy/class-glue/commit/960a1b4e1a5aa4e23d04bff4f2634bc00ef68748))
* set up Git user config in release.yml for proper commit attribution during releases ([34bacf5](https://github.com/shettayyy/class-glue/commit/34bacf56235229f42421a4aa72ab10272843f347))
* streamline pre-init hook by removing redundant git commands in .release-it.json ([8ec0794](https://github.com/shettayyy/class-glue/commit/8ec0794bf042f232c67cbfdcae6e64d25f620812))
* switch changelog preset to conventionalcommits ([656070f](https://github.com/shettayyy/class-glue/commit/656070f6dda88517afa6013797b2df12a0cdad76))
* update .release-it.json for better npm and GitHub release configurations ([0e41ce2](https://github.com/shettayyy/class-glue/commit/0e41ce209d2a4dd109a43465ab01b40980ec5919))
* update commitPartial format in .release-it.json for clearer changelog entries ([0ec463a](https://github.com/shettayyy/class-glue/commit/0ec463a7a3b54decf6ff9b5a0d3455605eb06ba6))
* update global name from 'clgl' to 'classG' in build.js ([146c585](https://github.com/shettayyy/class-glue/commit/146c585149258b858c0fbc5b29deeabeaab59c8e))
* update references from Class X to Class Glue in HTML and application files ([6643227](https://github.com/shettayyy/class-glue/commit/6643227af80f695a7c06d6e444b7c1ea38cf6ba8))
