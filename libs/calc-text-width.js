// Generate on https://codesandbox.io/s/lr4ynm652m
const Arial12Widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.333984375,3.333984375,4.259765625,6.673828125,6.673828125,10.669921875,8.00390625,2.291015625,3.99609375,3.99609375,4.669921875,7.0078125,3.333984375,3.99609375,3.333984375,3.333984375,6.673828125,6.673828125,6.673828125,6.673828125,6.673828125,6.673828125,6.673828125,6.673828125,6.673828125,6.673828125,3.333984375,3.333984375,7.0078125,7.0078125,7.0078125,6.673828125,12.181640625,8.00390625,8.00390625,8.666015625,8.666015625,8.00390625,7.330078125,9.333984375,8.666015625,3.333984375,6,8.00390625,6.673828125,9.99609375,8.666015625,9.333984375,8.00390625,9.333984375,8.666015625,8.00390625,7.330078125,8.666015625,8.00390625,11.326171875,8.00390625,8.00390625,7.330078125,3.333984375,3.333984375,3.333984375,5.630859375,6.673828125,3.99609375,6.673828125,6.673828125,6,6.673828125,6.673828125,3.333984375,6.673828125,6.673828125,2.666015625,2.666015625,6,2.666015625,9.99609375,6.673828125,6.673828125,6.673828125,6.673828125,3.99609375,6,3.333984375,6.673828125,6,8.666015625,6,6,6,4.0078125,3.1171875,4.0078125,7.0078125]
const Tahoma12Widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.75,3.984375,4.81640625,8.73046875,6.55078125,11.71875,8.0859375,2.53125,4.59375,4.59375,6.55078125,8.73046875,3.6328125,4.359375,3.6328125,4.587890625,6.55078125,6.55078125,6.55078125,6.55078125,6.55078125,6.55078125,6.55078125,6.55078125,6.55078125,6.55078125,4.2421875,4.2421875,8.73046875,8.73046875,8.73046875,5.68359375,10.91015625,7.1953125,7.072265625,7.20703125,8.138671875,6.732421875,6.2578125,8.009765625,8.103515625,4.4765625,4.998046875,7.0546875,5.970703125,9.24609375,8.009765625,8.490234375,6.615234375,8.490234375,7.447265625,6.685546875,7.0078125,7.869140625,7.16015625,10.822265625,6.966796875,6.9140625,6.708984375,4.59375,4.587890625,4.59375,8.73046875,6.55078125,6.55078125,6.298828125,6.6328125,5.537109375,6.6328125,6.31640625,3.8203125,6.6328125,6.69140625,2.7421875,3.380859375,5.9765625,2.7421875,10.078125,6.69140625,6.515625,6.6328125,6.6328125,4.32421875,5.35546875,4.013671875,6.69140625,5.9765625,8.90625,5.94140625,5.9765625,5.33203125,5.765625,4.587890625,5.765625,8.73046875]
const Verdana12Widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4.21875,4.72265625,5.5078125,9.8203125,7.62890625,12.9140625,8.71875,3.22265625,5.44921875,5.44921875,7.62890625,9.8203125,4.365234375,5.44921875,4.365234375,5.44921875,7.62890625,7.62890625,7.62890625,7.62890625,7.62890625,7.62890625,7.62890625,7.62890625,7.62890625,7.62890625,5.44921875,5.44921875,9.8203125,9.8203125,9.8203125,6.544921875,12,8.203125,8.2265625,8.37890625,9.24609375,7.587890625,6.896484375,9.3046875,9.017578125,5.05078125,5.455078125,8.314453125,6.6796875,10.11328125,8.9765625,9.4453125,7.236328125,9.4453125,8.34375,8.203125,7.39453125,8.783203125,8.203125,11.865234375,8.220703125,7.3828125,8.220703125,5.44921875,5.44921875,5.44921875,9.8203125,7.62890625,7.62890625,7.20703125,7.4765625,6.251953125,7.4765625,7.1484375,4.21875,7.4765625,7.59375,3.29296875,4.130859375,7.1015625,3.29296875,11.671875,7.59375,7.283203125,7.4765625,7.4765625,5.12109375,6.251953125,4.728515625,7.59375,7.1015625,9.8203125,7.1015625,7.1015625,6.3046875,7.6171875,5.44921875,7.6171875,9.8203125]

function calcWidth (charWidthTable) {
  return function (text) {
    if (typeof text !== 'string') {
      throw new TypeError('<text> should be string.')
    } else {
      return Array.from(text).reduce((total, curr) => {
        return total + charWidthTable[curr.charCodeAt()]
      }, 0)
    }
  }
}

module.exports = {
  Arial12: calcWidth(Arial12Widths),
  Tahoma12: calcWidth(Tahoma12Widths),
  Verdana12: calcWidth(Verdana12Widths)
}
