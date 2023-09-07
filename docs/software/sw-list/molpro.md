# Molpro

    module avail molpro/

[Molpro](https://www.molpro.net/) is a complete system of ab initio programs for molecular electronic structure calculations. The emphasis is on highly accurate computations with extensive treatment of the electron correlation problem through the multiconfiguration-reference CI, coupled cluster and associated methods.

## Usage

The license of the MolPro version 2012.1 is:

- bought by CERIT-SC Centre for academical use by any MetaCentrum user
- restricted just to Brno locality
- module `molpro/2008.1` - MolPro version 2008.1; o utilize this program, you have to buy a licence, then scan this licence and send it to address <meta@cesnet.cz>

Then run as

    $ molpro inputfile.com

- the program automatically detects the number of available processors/cores (for both parallel as well as distributed computations)
- if necessary, the program automatically uses the MPI routines in order to perform distributed computation
- to limit the number of processes/threads, use the `-n` and/or `-t` options -- see `molpro -h` or program documentation

