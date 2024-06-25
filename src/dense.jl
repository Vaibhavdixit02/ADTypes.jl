"""
    AutoChainRules{RC}

Struct used to select an automatic differentiation backend based on [ChainRulesCore.jl](https://github.com/JuliaDiff/ChainRulesCore.jl) (see the list [here](https://juliadiff.org/ChainRulesCore.jl/stable/index.html#ChainRules-roll-out-status)).

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoChainRules(; ruleconfig)

# Fields

  - `ruleconfig::RC`: a [`ChainRulesCore.RuleConfig`](https://juliadiff.org/ChainRulesCore.jl/stable/rule_author/superpowers/ruleconfig.html) object.
"""
Base.@kwdef struct AutoChainRules{RC} <: AbstractADType
    ruleconfig::RC
end

mode(::AutoChainRules) = ForwardOrReverseMode()  # specialized in the extension

function Base.show(io::IO, backend::AutoChainRules)
    print(io, "AutoChainRules(ruleconfig=$(backend.ruleconfig))")
end

"""
    AutoDiffractor

Struct used to select the [Diffractor.jl](https://github.com/JuliaDiff/Diffractor.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoDiffractor()
"""
struct AutoDiffractor <: AbstractADType end

mode(::AutoDiffractor) = ForwardOrReverseMode()

"""
    AutoEnzyme{M}

Struct used to select the [Enzyme.jl](https://github.com/EnzymeAD/Enzyme.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoEnzyme(; mode=nothing)

# Fields

  - `mode::M`: can be either

      + an object subtyping `EnzymeCore.Mode` (like `EnzymeCore.Forward` or `EnzymeCore.Reverse`) if a specific mode is required
      + `nothing` to choose the best mode automatically
"""
Base.@kwdef struct AutoEnzyme{M} <: AbstractADType
    mode::M = nothing
end

mode(::AutoEnzyme) = ForwardOrReverseMode()  # specialized in the extension

function Base.show(io::IO, backend::AutoEnzyme)
    if isnothing(backend.mode)
        print(io, "AutoEnzyme()")
    else
        print(io, "AutoEnzyme(mode=$(backend.mode))")
    end
end

"""
    AutoFastDifferentiation

Struct used to select the [FastDifferentiation.jl](https://github.com/brianguenter/FastDifferentiation.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoFastDifferentiation()
"""
struct AutoFastDifferentiation <: AbstractADType end

mode(::AutoFastDifferentiation) = SymbolicMode()

"""
    AutoFiniteDiff{T1,T2,T3}

Struct used to select the [FiniteDiff.jl](https://github.com/JuliaDiff/FiniteDiff.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoFiniteDiff(; fdtype=Val(:forward), fdjtype=fdtype, fdhtype=Val(:hcentral))

# Fields

  - `fdtype::T1`: finite difference type
  - `fdjtype::T2`: finite difference type for the Jacobian
  - `fdhtype::T3`: finite difference type for the Hessian
"""
Base.@kwdef struct AutoFiniteDiff{T1, T2, T3} <: AbstractADType
    fdtype::T1 = Val(:forward)
    fdjtype::T2 = fdtype
    fdhtype::T3 = Val(:hcentral)
end

mode(::AutoFiniteDiff) = ForwardMode()

function Base.show(io::IO, backend::AutoFiniteDiff)
    s = "AutoFiniteDiff("
    if backend.fdtype != Val(:forward)
        s *= "fdtype=$(backend.fdtype), "
    end
    if backend.fdjtype != backend.fdtype
        s *= "fdjtype=$(backend.fdjtype), "
    end
    if backend.fdhtype != Val(:hcentral)
        s *= "fdhtype=$(backend.fdhtype), "
    end
    if endswith(s, ", ")
        s = s[1:(end - 2)]
    end
    s *= ")"
    print(io, s)
end

"""
    AutoFiniteDifferences{T}

Struct used to select the [FiniteDifferences.jl](https://github.com/JuliaDiff/FiniteDifferences.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoFiniteDifferences(; fdm)

# Fields

  - `fdm::T`: a [`FiniteDifferenceMethod`](https://juliadiff.org/FiniteDifferences.jl/stable/pages/api/#FiniteDifferences.FiniteDifferenceMethod)
"""
Base.@kwdef struct AutoFiniteDifferences{T} <: AbstractADType
    fdm::T
end

mode(::AutoFiniteDifferences) = ForwardMode()

function Base.show(io::IO, backend::AutoFiniteDifferences)
    print(io, "AutoFiniteDifferences(fdm=$(backend.fdm))")
end

"""
    AutoForwardDiff{chunksize,T}

Struct used to select the [ForwardDiff.jl](https://github.com/JuliaDiff/ForwardDiff.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoForwardDiff(; chunksize=nothing, tag=nothing)

# Type parameters

  - `chunksize`: the preferred [chunk size](https://juliadiff.org/ForwardDiff.jl/stable/user/advanced/#Configuring-Chunk-Size) to evaluate several derivatives at once

# Fields

  - `tag::T`: a [custom tag](https://juliadiff.org/ForwardDiff.jl/release-0.10/user/advanced.html#Custom-tags-and-tag-checking-1) to handle nested differentiation calls (usually not necessary)
"""
struct AutoForwardDiff{chunksize, T} <: AbstractADType
    tag::T
end

function AutoForwardDiff(; chunksize = nothing, tag = nothing)
    AutoForwardDiff{chunksize, typeof(tag)}(tag)
end

mode(::AutoForwardDiff) = ForwardMode()

function Base.show(io::IO, backend::AutoForwardDiff{chunksize}) where {chunksize}
    s = "AutoForwardDiff("
    if chunksize !== nothing
        s *= "chunksize=$chunksize, "
    end
    if backend.tag !== nothing
        s *= "tag=$(backend.tag), "
    end
    if endswith(s, ", ")
        s = s[1:(end - 2)]
    end
    s *= ")"
    print(io, s)
end

"""
    AutoPolyesterForwardDiff{chunksize,T}

Struct used to select the [PolyesterForwardDiff.jl](https://github.com/JuliaDiff/PolyesterForwardDiff.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoPolyesterForwardDiff(; chunksize=nothing, tag=nothing)

# Type parameters

  - `chunksize`: the preferred [chunk size](https://juliadiff.org/ForwardDiff.jl/stable/user/advanced/#Configuring-Chunk-Size) to evaluate several derivatives at once

# Fields

  - `tag::T`: a [custom tag](https://juliadiff.org/ForwardDiff.jl/release-0.10/user/advanced.html#Custom-tags-and-tag-checking-1) to handle nested differentiation calls (usually not necessary)
"""
struct AutoPolyesterForwardDiff{chunksize, T} <: AbstractADType
    tag::T
end

function AutoPolyesterForwardDiff(; chunksize = nothing, tag = nothing)
    AutoPolyesterForwardDiff{chunksize, typeof(tag)}(tag)
end

mode(::AutoPolyesterForwardDiff) = ForwardMode()

function Base.show(io::IO, backend::AutoPolyesterForwardDiff{chunksize}) where {chunksize}
    s = "AutoPolyesterForwardDiff("
    if chunksize !== nothing
        s *= "chunksize=$chunksize, "
    end
    if backend.tag !== nothing
        s *= "tag=$(backend.tag), "
    end
    if endswith(s, ", ")
        s = s[1:(end - 2)]
    end
    s *= ")"
    print(io, s)
end

"""
    AutoReverseDiff

Struct used to select the [ReverseDiff.jl](https://github.com/JuliaDiff/ReverseDiff.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoReverseDiff(; compile::Union{Val, Bool} = Val(false))

# Fields

  - `compile::Union{Val, Bool}`: whether to [compile the tape](https://juliadiff.org/ReverseDiff.jl/api/#ReverseDiff.compile) prior to differentiation
"""
struct AutoReverseDiff{C} <: AbstractADType
    compile::Bool  # this field is left for legacy reasons

    function AutoReverseDiff(; compile::Union{Val, Bool} = Val(false))
        _compile = _unwrap_val(compile)
        return new{_compile}(_compile)
    end
end

function Base.getproperty(ad::AutoReverseDiff, s::Symbol)
    if s === :compile
        Base.depwarn(
            "`ad.compile` where `ad` is `AutoReverseDiff` has been deprecated and will be removed in v2. Instead it is available as a compile-time constant as `AutoReverseDiff{true}` or `AutoReverseDiff{false}`.",
            :getproperty)
    end
    return getfield(ad, s)
end

mode(::AutoReverseDiff) = ReverseMode()

function Base.show(io::IO, ::AutoReverseDiff{compile}) where {compile}
    if !compile
        print(io, "AutoReverseDiff()")
    else
        print(io, "AutoReverseDiff(compile=true)")
    end
end

"""
    AutoSymbolics

Struct used to select the [Symbolics.jl](https://github.com/JuliaSymbolics/Symbolics.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoSymbolics()
"""
struct AutoSymbolics <: AbstractADType end

mode(::AutoSymbolics) = SymbolicMode()

"""
    AutoTapir

Struct used to select the [Tapir.jl](https://github.com/withbayes/Tapir.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoTapir(; safe_mode=true)

# Fields

  - `safe_mode::Bool`: whether to run additional checks to catch errors early. On by default. Turn off to maximise performance if your code runs correctly.
"""
Base.@kwdef struct AutoTapir <: AbstractADType
    safe_mode::Bool = true
end

mode(::AutoTapir) = ReverseMode()

function Base.show(io::IO, backend::AutoTapir)
    if backend.safe_mode
        print(io, "AutoTapir()")
    else
        print(io, "AutoTapir(safe_mode=false)")
    end
end

"""
    AutoTracker

Struct used to select the [Tracker.jl](https://github.com/FluxML/Tracker.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoTracker()
"""
struct AutoTracker <: AbstractADType end

mode(::AutoTracker) = ReverseMode()

"""
    AutoZygote

Struct used to select the [Zygote.jl](https://github.com/FluxML/Zygote.jl) backend for automatic differentiation.

Defined by [ADTypes.jl](https://github.com/SciML/ADTypes.jl).

# Constructors

    AutoZygote()
"""
struct AutoZygote <: AbstractADType end

mode(::AutoZygote) = ReverseMode()
