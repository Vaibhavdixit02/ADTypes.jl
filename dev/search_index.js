var documenterSearchIndex = {"docs":
[{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"CurrentModule = ADTypes\nCollapsedDocStrings = true","category":"page"},{"location":"#ADTypes.jl","page":"ADTypes.jl","title":"ADTypes.jl","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"Documentation for ADTypes.jl.","category":"page"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"ADTypes\nAbstractADType","category":"page"},{"location":"#ADTypes.ADTypes","page":"ADTypes.jl","title":"ADTypes.ADTypes","text":"ADTypes.jl\n\nADTypes.jl is a multi-valued logic system to choose an automatic differentiation (AD) package and specify its parameters.\n\n\n\n\n\n","category":"module"},{"location":"#ADTypes.AbstractADType","page":"ADTypes.jl","title":"ADTypes.AbstractADType","text":"AbstractADType\n\nAbstract supertype for all AD choices.\n\n\n\n\n\n","category":"type"},{"location":"#Dense-AD","page":"ADTypes.jl","title":"Dense AD","text":"","category":"section"},{"location":"#Forward-mode","page":"ADTypes.jl","title":"Forward mode","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"Algorithmic differentiation:","category":"page"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"AutoForwardDiff\nAutoPolyesterForwardDiff","category":"page"},{"location":"#ADTypes.AutoForwardDiff","page":"ADTypes.jl","title":"ADTypes.AutoForwardDiff","text":"AutoForwardDiff{chunksize,T}\n\nStruct used to select the ForwardDiff.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoForwardDiff(; chunksize=nothing, tag=nothing)\n\nType parameters\n\nchunksize: the preferred chunk size to evaluate several derivatives at once\n\nFields\n\ntag::T: a custom tag to handle nested differentiation calls (usually not necessary)\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.AutoPolyesterForwardDiff","page":"ADTypes.jl","title":"ADTypes.AutoPolyesterForwardDiff","text":"AutoPolyesterForwardDiff{chunksize,T}\n\nStruct used to select the PolyesterForwardDiff.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoPolyesterForwardDiff(; chunksize=nothing, tag=nothing)\n\nType parameters\n\nchunksize: the preferred chunk size to evaluate several derivatives at once\n\nFields\n\ntag::T: a custom tag to handle nested differentiation calls (usually not necessary)\n\n\n\n\n\n","category":"type"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"Finite differences:","category":"page"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"AutoFiniteDiff\nAutoFiniteDifferences","category":"page"},{"location":"#ADTypes.AutoFiniteDiff","page":"ADTypes.jl","title":"ADTypes.AutoFiniteDiff","text":"AutoFiniteDiff{T1,T2,T3}\n\nStruct used to select the FiniteDiff.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoFiniteDiff(; fdtype=Val(:forward), fdjtype=fdtype, fdhtype=Val(:hcentral))\n\nFields\n\nfdtype::T1: finite difference type\nfdjtype::T2: finite difference type for the Jacobian\nfdhtype::T3: finite difference type for the Hessian\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.AutoFiniteDifferences","page":"ADTypes.jl","title":"ADTypes.AutoFiniteDifferences","text":"AutoFiniteDifferences{T}\n\nStruct used to select the FiniteDifferences.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoFiniteDifferences(; fdm)\n\nFields\n\nfdm::T: a FiniteDifferenceMethod\n\n\n\n\n\n","category":"type"},{"location":"#Reverse-mode","page":"ADTypes.jl","title":"Reverse mode","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"AutoReverseDiff\nAutoTapir\nAutoTracker\nAutoZygote","category":"page"},{"location":"#ADTypes.AutoReverseDiff","page":"ADTypes.jl","title":"ADTypes.AutoReverseDiff","text":"AutoReverseDiff\n\nStruct used to select the ReverseDiff.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoReverseDiff(; compile=false)\n\nFields\n\ncompile::Bool: whether to compile the tape prior to differentiation\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.AutoTapir","page":"ADTypes.jl","title":"ADTypes.AutoTapir","text":"AutoTapir\n\nStruct used to select the Tapir.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoTapir(; safe_mode=true)\n\nFields\n\nsafe_mode::Bool: whether to run additional checks to catch errors early. On by default. Turn off to maximise performance if your code runs correctly.\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.AutoTracker","page":"ADTypes.jl","title":"ADTypes.AutoTracker","text":"AutoTracker\n\nStruct used to select the Tracker.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoTracker()\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.AutoZygote","page":"ADTypes.jl","title":"ADTypes.AutoZygote","text":"AutoZygote\n\nStruct used to select the Zygote.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoZygote()\n\n\n\n\n\n","category":"type"},{"location":"#Forward-or-reverse-mode","page":"ADTypes.jl","title":"Forward or reverse mode","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"AutoEnzyme\nAutoChainRules\nAutoDiffractor","category":"page"},{"location":"#ADTypes.AutoEnzyme","page":"ADTypes.jl","title":"ADTypes.AutoEnzyme","text":"AutoEnzyme{M}\n\nStruct used to select the Enzyme.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoEnzyme(; mode=nothing)\n\nFields\n\nmode::M: can be either\nan object subtyping EnzymeCore.Mode (like EnzymeCore.Forward or EnzymeCore.Reverse) if a specific mode is required\nnothing to choose the best mode automatically\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.AutoChainRules","page":"ADTypes.jl","title":"ADTypes.AutoChainRules","text":"AutoChainRules{RC}\n\nStruct used to select an automatic differentiation backend based on ChainRulesCore.jl (see the list here).\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoChainRules(; ruleconfig)\n\nFields\n\nruleconfig::RC: a ChainRulesCore.RuleConfig object.\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.AutoDiffractor","page":"ADTypes.jl","title":"ADTypes.AutoDiffractor","text":"AutoDiffractor\n\nStruct used to select the Diffractor.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoDiffractor()\n\n\n\n\n\n","category":"type"},{"location":"#Symbolic-mode","page":"ADTypes.jl","title":"Symbolic mode","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"AutoFastDifferentiation\nAutoSymbolics","category":"page"},{"location":"#ADTypes.AutoFastDifferentiation","page":"ADTypes.jl","title":"ADTypes.AutoFastDifferentiation","text":"AutoFastDifferentiation\n\nStruct used to select the FastDifferentiation.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoFastDifferentiation()\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.AutoSymbolics","page":"ADTypes.jl","title":"ADTypes.AutoSymbolics","text":"AutoSymbolics\n\nStruct used to select the Symbolics.jl backend for automatic differentiation.\n\nDefined by ADTypes.jl.\n\nConstructors\n\nAutoSymbolics()\n\n\n\n\n\n","category":"type"},{"location":"#Sparse-AD","page":"ADTypes.jl","title":"Sparse AD","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"AutoSparse\nADTypes.dense_ad","category":"page"},{"location":"#ADTypes.AutoSparse","page":"ADTypes.jl","title":"ADTypes.AutoSparse","text":"AutoSparse{D,S,C}\n\nWraps an ADTypes.jl object to deal with sparse Jacobians and Hessians.\n\nFields\n\ndense_ad::D: the underlying AD package, subtyping AbstractADType\nsparsity_detector::S: the sparsity pattern detector, subtyping AbstractSparsityDetector\ncoloring_algorithm::C: the coloring algorithm, subtyping AbstractColoringAlgorithm\n\nConstructors\n\nAutoSparse(\n    dense_ad;\n    sparsity_detector=ADTypes.NoSparsityDetector(),\n    coloring_algorithm=ADTypes.NoColoringAlgorithm()\n)\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.dense_ad","page":"ADTypes.jl","title":"ADTypes.dense_ad","text":"dense_ad(ad::AutoSparse)::AbstractADType\n\nReturn the underlying AD package for a sparse AD choice.\n\nSee also\n\nAutoSparse\n\n\n\n\n\n","category":"function"},{"location":"#Sparsity-detector","page":"ADTypes.jl","title":"Sparsity detector","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"ADTypes.sparsity_detector\nADTypes.AbstractSparsityDetector\nADTypes.jacobian_sparsity\nADTypes.hessian_sparsity\nADTypes.NoSparsityDetector","category":"page"},{"location":"#ADTypes.sparsity_detector","page":"ADTypes.jl","title":"ADTypes.sparsity_detector","text":"sparsity_detector(ad::AutoSparse)::AbstractSparsityDetector\n\nReturn the sparsity pattern detector for a sparse AD choice.\n\nSee also\n\nAutoSparse\nAbstractSparsityDetector\n\n\n\n\n\n","category":"function"},{"location":"#ADTypes.AbstractSparsityDetector","page":"ADTypes.jl","title":"ADTypes.AbstractSparsityDetector","text":"AbstractSparsityDetector\n\nAbstract supertype for sparsity pattern detectors.\n\nRequired methods\n\njacobian_sparsity\nhessian_sparsity\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.jacobian_sparsity","page":"ADTypes.jl","title":"ADTypes.jacobian_sparsity","text":"jacobian_sparsity(f, x, sd::AbstractSparsityDetector)::AbstractMatrix{Bool}\njacobian_sparsity(f!, y, x, sd::AbstractSparsityDetector)::AbstractMatrix{Bool}\n\nUse detector sd to construct a (typically sparse) matrix S describing the pattern of nonzeroes in the Jacobian of f (resp. f!) applied at x (resp. (y, x)).\n\n\n\n\n\n","category":"function"},{"location":"#ADTypes.hessian_sparsity","page":"ADTypes.jl","title":"ADTypes.hessian_sparsity","text":"hessian_sparsity(f, x, sd::AbstractSparsityDetector)::AbstractMatrix{Bool}\n\nUse detector sd to construct a (typically sparse) matrix S describing the pattern of nonzeroes in the Hessian of f applied at x.\n\n\n\n\n\n","category":"function"},{"location":"#ADTypes.NoSparsityDetector","page":"ADTypes.jl","title":"ADTypes.NoSparsityDetector","text":"NoSparsityDetector <: AbstractSparsityDetector\n\nTrivial sparsity detector, which always returns a full sparsity pattern (only ones, no zeroes).\n\nSee also\n\nAbstractSparsityDetector\n\n\n\n\n\n","category":"type"},{"location":"#Coloring-algorithm","page":"ADTypes.jl","title":"Coloring algorithm","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"ADTypes.coloring_algorithm\nADTypes.AbstractColoringAlgorithm\nADTypes.column_coloring\nADTypes.row_coloring\nADTypes.symmetric_coloring\nADTypes.NoColoringAlgorithm","category":"page"},{"location":"#ADTypes.coloring_algorithm","page":"ADTypes.jl","title":"ADTypes.coloring_algorithm","text":"coloring_algorithm(ad::AutoSparse)::AbstractColoringAlgorithm\n\nReturn the coloring algorithm for a sparse AD choice.\n\nSee also\n\nAutoSparse\nAbstractColoringAlgorithm\n\n\n\n\n\n","category":"function"},{"location":"#ADTypes.AbstractColoringAlgorithm","page":"ADTypes.jl","title":"ADTypes.AbstractColoringAlgorithm","text":"AbstractColoringAlgorithm\n\nAbstract supertype for Jacobian/Hessian coloring algorithms, defined for example in SparseDiffTools.jl.\n\nRequired methods\n\ncolumn_coloring\nrow_coloring\nsymmetric_coloring\n\nNote\n\nThe terminology and definitions are taken from the following paper:\n\n\"What Color Is Your Jacobian? Graph Coloring for Computing Derivatives\"Assefaw Hadish Gebremedhin, Fredrik Manne, and Alex Pothen (2005)https://epubs.siam.org/doi/10.1137/S0036144504444711\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.column_coloring","page":"ADTypes.jl","title":"ADTypes.column_coloring","text":"column_coloring(M::AbstractMatrix, ca::ColoringAlgorithm)::AbstractVector{<:Integer}\n\nUse algorithm ca to construct a structurally orthogonal partition of the columns of M.\n\nThe result is a coloring vector c of length size(M, 2) such that for every non-zero coefficient M[i, j], column j is the only column of its color c[j] with a non-zero coefficient in row i.\n\n\n\n\n\n","category":"function"},{"location":"#ADTypes.row_coloring","page":"ADTypes.jl","title":"ADTypes.row_coloring","text":"row_coloring(M::AbstractMatrix, ca::ColoringAlgorithm)::AbstractVector{<:Integer}\n\nUse algorithm ca to construct a structurally orthogonal partition of the rows of M.\n\nThe result is a coloring vector c of length size(M, 1) such that for every non-zero coefficient M[i, j], row i is the only row of its color c[i] with a non-zero coefficient in column j.\n\n\n\n\n\n","category":"function"},{"location":"#ADTypes.symmetric_coloring","page":"ADTypes.jl","title":"ADTypes.symmetric_coloring","text":"symmetric_coloring(M::AbstractMatrix, ca::ColoringAlgorithm)::AbstractVector{<:Integer}\n\nUse algorithm ca to construct a symmetrically structurally orthogonal partition of the columns (or rows) of the symmetric matrix M.\n\nThe result is a coloring vector c of length size(M, 1) == size(M, 2) such that for every non-zero coefficient M[i, j], at least one of the following conditions holds:\n\ncolumn j is the only column of its color c[j] with a non-zero coefficient in row i;\ncolumn i is the only column of its color c[i] with a non-zero coefficient in row j.\n\n\n\n\n\n","category":"function"},{"location":"#ADTypes.NoColoringAlgorithm","page":"ADTypes.jl","title":"ADTypes.NoColoringAlgorithm","text":"NoColoringAlgorithm <: AbstractColoringAlgorithm\n\nTrivial coloring algorithm, which always returns a different color for each matrix column/row.\n\nSee also\n\nAbstractColoringAlgorithm\n\n\n\n\n\n","category":"type"},{"location":"#Modes","page":"ADTypes.jl","title":"Modes","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"ADTypes.mode\nADTypes.AbstractMode\nADTypes.ForwardMode\nADTypes.ForwardOrReverseMode\nADTypes.ReverseMode\nADTypes.SymbolicMode","category":"page"},{"location":"#ADTypes.mode","page":"ADTypes.jl","title":"ADTypes.mode","text":"mode(ad::AbstractADType)\n\nReturn the differentiation mode of ad, as a subtype of AbstractMode.\n\n\n\n\n\n","category":"function"},{"location":"#ADTypes.AbstractMode","page":"ADTypes.jl","title":"ADTypes.AbstractMode","text":"AbstractMode\n\nAbstract supertype for the traits identifying differentiation modes.\n\nSubtypes\n\nForwardMode\nReverseMode\nForwardOrReverseMode\nSymbolicMode\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.ForwardMode","page":"ADTypes.jl","title":"ADTypes.ForwardMode","text":"ForwardMode\n\nTrait for AD choices that rely on forward mode algorithmic differentiation or finite differences.\n\nThese two paradigms are classified together because they can both efficiently compute Jacobian-vector products.\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.ForwardOrReverseMode","page":"ADTypes.jl","title":"ADTypes.ForwardOrReverseMode","text":"ForwardOrReverseMode\n\nTrait for AD choices that can work either in ForwardMode or ReverseMode, depending on their configuration.\n\nwarning: Warning\nThis trait should rarely be used, because more precise dispatches to ForwardMode or ReverseMode should be defined.\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.ReverseMode","page":"ADTypes.jl","title":"ADTypes.ReverseMode","text":"ReverseMode\n\nTrait for AD choices that rely on reverse mode algorithmic differentiation.\n\n\n\n\n\n","category":"type"},{"location":"#ADTypes.SymbolicMode","page":"ADTypes.jl","title":"ADTypes.SymbolicMode","text":"SymbolicMode\n\nTrait for AD choices that rely on symbolic differentiation.\n\n\n\n\n\n","category":"type"},{"location":"#Miscellaneous","page":"ADTypes.jl","title":"Miscellaneous","text":"","category":"section"},{"location":"","page":"ADTypes.jl","title":"ADTypes.jl","text":"ADTypes.Auto","category":"page"},{"location":"#ADTypes.Auto","page":"ADTypes.jl","title":"ADTypes.Auto","text":"ADTypes.Auto(package::Symbol)\n\nA shortcut that converts an AD package name into an instance of AbstractADType, with all parameters set to their default values.\n\nwarning: Warning\nThis function is type-unstable by design and might lead to suboptimal performance. In most cases, you should never need it: use the individual backend types directly.\n\nExample\n\nimport ADTypes\nbackend = ADTypes.Auto(:Zygote)\n\n# output\n\nADTypes.AutoZygote()\n\n\n\n\n\n","category":"function"}]
}
