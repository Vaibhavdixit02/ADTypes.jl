## Sparsity detector

"""
    AbstractSparsityDetector

Abstract supertype for sparsity pattern detectors.

# Required methods

- [`jacobian_sparsity`](@ref)
- [`hessian_sparsity`](@ref)
"""
abstract type AbstractSparsityDetector end

"""
    jacobian_sparsity(f, x, sd::AbstractSparsityDetector)::AbstractMatrix{Bool}
    jacobian_sparsity(f!, y, x, sd::AbstractSparsityDetector)::AbstractMatrix{Bool}

Use detector `sd` to construct a (typically sparse) matrix `S` describing the pattern of nonzeroes in the Jacobian of `f` (resp. `f!`) applied at `x` (resp. `(y, x)`).
"""
function jacobian_sparsity end

"""
    hessian_sparsity(f, x, sd::AbstractSparsityDetector)::AbstractMatrix{Bool}

Use detector `sd` to construct a (typically sparse) matrix `S` describing the pattern of nonzeroes in the Hessian of `f` applied at `x`.
"""
function hessian_sparsity end

"""
    NoSparsityDetector <: AbstractSparsityDetector

Trivial sparsity detector, which always returns a full sparsity pattern (only ones, no zeroes).

# See also

- [`AbstractSparsityDetector`](@ref)
"""
struct NoSparsityDetector <: AbstractSparsityDetector end

jacobian_sparsity(f, x, ::NoSparsityDetector) = trues(length(f(x)), length(x))
jacobian_sparsity(f!, y, x, ::NoSparsityDetector) = trues(length(y), length(x))
hessian_sparsity(f, x, ::NoSparsityDetector) = trues(length(x), length(x))

## Coloring algorithm

"""
    AbstractColoringAlgorithm

Abstract supertype for Jacobian/Hessian coloring algorithms, defined for example in [SparseDiffTools.jl](https://github.com/JuliaDiff/SparseDiffTools.jl).

# Required methods

- [`column_coloring`](@ref)
- [`row_coloring`](@ref)
- [`symmetric_coloring`](@ref)

# Note

The terminology and definitions are taken from the following paper:

> "What Color Is Your Jacobian? Graph Coloring for Computing Derivatives"
> Assefaw Hadish Gebremedhin, Fredrik Manne, and Alex Pothen (2005)
> <https://epubs.siam.org/doi/10.1137/S0036144504444711>
"""
abstract type AbstractColoringAlgorithm end

"""
    column_coloring(M::AbstractMatrix, ca::ColoringAlgorithm)::AbstractVector{<:Integer}

Use algorithm `ca` to construct a structurally orthogonal partition of the columns of `M`.

The result is a coloring vector `c` of length `size(M, 2)` such that for every non-zero coefficient `M[i, j]`, column `j` is the only column of its color `c[j]` with a non-zero coefficient in row `i`.
"""
function column_coloring end

"""
    row_coloring(M::AbstractMatrix, ca::ColoringAlgorithm)::AbstractVector{<:Integer}

Use algorithm `ca` to construct a structurally orthogonal partition of the rows of `M`.

The result is a coloring vector `c` of length `size(M, 1)` such that for every non-zero coefficient `M[i, j]`, row `i` is the only row of its color `c[i]` with a non-zero coefficient in column `j`.
"""
function row_coloring end

"""
    symmetric_coloring(M::AbstractMatrix, ca::ColoringAlgorithm)::AbstractVector{<:Integer}

Use algorithm `ca` to construct a symetrically structurally orthogonal partition of the columns (or rows) of the symmetric matrix `M`.

The result is a coloring vector `c` of length `size(M, 1) == size(M, 2)` such that for every non-zero coefficient `M[i, j]`, at least one of the following conditions holds:

- column `j` is the only column of its color `c[j]` with a non-zero coefficient in row `i`;
- column `i` is the only column of its color `c[i]` with a non-zero coefficient in row `j`.
"""
function symmetric_coloring end

"""
    NoColoringAlgorithm <: AbstractColoringAlgorithm

Trivial coloring algorithm, which always returns a different color for each matrix column/row.

# See also

- [`AbstractColoringAlgorithm`](@ref)
"""
struct NoColoringAlgorithm <: AbstractColoringAlgorithm end

column_coloring(M::AbstractMatrix, ::NoColoringAlgorithm) = 1:size(M, 2)
row_coloring(M::AbstractMatrix, ::NoColoringAlgorithm) = 1:size(M, 1)
symmetric_coloring(M::AbstractMatrix, ::NoColoringAlgorithm) = 1:size(M, 1)

## Sparse backend

"""
    AutoSparse{D,S,C}

Wraps an ADTypes.jl object to deal with sparse Jacobians and Hessians.

# Fields

- `dense_ad::D`: the underlying AD package, subtyping [`AbstractADType`](@ref)
- `sparsity_detector::S`: the sparsity pattern detector, subtyping [`AbstractSparsityDetector`](@ref)
- `coloring_algorithm::C`: the coloring algorithm, subtyping [`AbstractColoringAlgorithm`](@ref)

# Constructors

    AutoSparse(
        dense_ad;
        sparsity_detector=ADTypes.NoSparsityDetector(),
        coloring_algorithm=ADTypes.NoColoringAlgorithm()
    )
"""
struct AutoSparse{
    D <: AbstractADType,
    S <: AbstractSparsityDetector,
    C <: AbstractColoringAlgorithm
} <: AbstractADType
    dense_ad::D
    sparsity_detector::S
    coloring_algorithm::C
end

function AutoSparse(
        dense_ad;
        sparsity_detector = NoSparsityDetector(),
        coloring_algorithm = NoColoringAlgorithm())
    return AutoSparse{
        typeof(dense_ad),
        typeof(sparsity_detector),
        typeof(coloring_algorithm)
    }(dense_ad, sparsity_detector, coloring_algorithm)
end

"""
    dense_ad(ad::AutoSparse)::AbstractADType

Return the underlying AD package for a sparse AD choice.
    
# See also

- [`AutoSparse`](@ref)
"""
dense_ad(ad::AutoSparse) = ad.dense_ad

mode(sparse_ad::AutoSparse) = mode(dense_ad(sparse_ad))

"""
    sparsity_detector(ad::AutoSparse)::AbstractSparsityDetector

Return the sparsity pattern detector for a sparse AD choice.

# See also

- [`AutoSparse`](@ref)
- [`AbstractSparsityDetector`](@ref)
"""
sparsity_detector(ad::AutoSparse) = ad.sparsity_detector

"""
    coloring_algorithm(ad::AutoSparse)::AbstractColoringAlgorithm

Return the coloring algorithm for a sparse AD choice.

# See also

- [`AutoSparse`](@ref)
- [`AbstractColoringAlgorithm`](@ref)
"""
coloring_algorithm(ad::AutoSparse) = ad.coloring_algorithm
