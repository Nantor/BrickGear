const GEARS_SIZE_LEGO_DEFAULT = [1,8,12,14,16,20,24,28,36,40,56,60,140];

//The ratio of two numbers r and s is written r/s, where r is the numerator and s is the denominator. The ratio of r to s is equivalent to the quotient r/s. Betting odds written as r:s correspond to s/(r + s). A number which can be expressed as a ratio of integers is called a rational number.
type Ratio = {
    numerator: bigint;
    denominator: bigint;
}

interface gearRatio {
    getOutputRatio: () => Ratio;
}
