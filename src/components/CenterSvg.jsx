import styled from "styled-components"
import { PropTypes } from "prop-types"

const CenterSvg = ({ mode }) => {
  return (
    <Svg viewBox='-200 -400 400 800'>
      <path fill="none" stroke={mode === "light" ? "#7FB9BD" : "#873582"} strokeWidth="6">
        <animate fill="transparent" stroke="green"
        repeatCount="indefinite" attributeName="d" strokeWidth="6" dur="25s"
        values="
        M132 -165.1C190.5 -139.1 270.7 -126.6 295 -87.4C319.2 -48.3 287.5 17.4
        253.4 70C219.3 122.6 182.9 162 140.2 191.7C97.6 221.3 48.8 241.1 -12.3
        258.1C-73.5 275.1 -146.9 289.3 -187.4 258.9C-227.8 228.5 -235.2 153.7
        -239.3 89.8C-243.5 26 -244.4 -26.9 -233.8 -81C-223.1 -135.1 -200.9 -190.5
        -160 -222.2C-119.1 -254 -59.6 -262 -11.4 -246.3C36.7 -230.6 73.5 -191.1 132
        -165.1;

        M103.6 -173.4C133.7 -120.7 157.2 -89.7 185.6 -49.2C214 -8.8 247.3 41.2
        243.3 87C239.4 132.8 198.1 174.4 151.4 198.9C104.6 223.3 52.3 230.7 -3.8
        235.9C-60 241.2 -119.9 244.4 -160.3 217.8C-200.7 191.3 -221.6 135.1 -241.6
        77.6C-261.5 20.1 -280.6 -38.6 -267.9 -89.9C-255.2 -141.2 -210.8 -185.1
        -160.8 -231.4C-110.9 -277.6 -55.4 -326.3 -9.4 -313.4C36.7 -300.6 73.5
        -226.1 103.6 -173.4;

        M190.7 -261C250.2 -219.3 303.4 -167.6 300.3 -112.8C297.2 -57.9 237.8 0
        212.5 66.4C187.3 132.7 196.2 207.5 166.5 232.2C136.8 256.9 68.4 231.4 -0.3
        231.9C-69 232.3 -137.9 258.5 -195.6 242.9C-253.3 227.3 -299.8 169.9 -307.1
        108.9C-314.5 47.8 -282.8 -16.9 -251.5 -72C-220.3 -127.2 -189.5 -172.8 -147.6
        -220.2C-105.8 -267.6 -52.9 -316.8 6.4 -325.6C65.6 -334.3 131.3 -302.7 190.7
        -261;
        "/>
      </path>
      <path fill="none" stroke={mode === "light" ? "#7FB9BD" : "#873582"} strokeWidth="6">
        <animate fill="transparent" stroke="green"
        repeatCount="indefinite" attributeName="d" strokeWidth="6" dur="20s"
        values="M85.6 -134.9C112.4 -98.3 136.5 -75.3 168.8 -39.8C201 -4.3 241.3
        43.6 240.2 87.7C239.2 131.9 196.9 172.3 150 207.1C103.1 241.8 51.5 270.9
        -2.7 274.7C-57 278.5 -114 256.9 -150.2 218.7C-186.3 180.4 -201.6 125.4
        -219.7 71.1C-237.8 16.7 -258.7 -37.1 -246.5 -81.7C-234.2 -126.4 -188.8
        -161.9 -142.2 -192.1C-95.6 -222.3 -47.8 -247.1 -9.2 -234.5C29.4 -221.8 58.8
        -171.6 85.6 -134.9;

        M143 -192C185.4 -166.1 219.6 -124.3 229 -78.4C238.4 -32.5 222.9 17.4
        209.9 71.6C197 125.8 186.7 184.3 152.1 222.2C117.6 260.1 58.8 277.6 14.7
        257.3C-29.4 237.1 -58.8 179.2 -95.7 142.1C-132.6 104.9 -177.1 88.5 -195.6
        57.5C-214 26.5 -206.4 -19.1 -184.7 -52.1C-163.1 -85.1 -127.4 -105.7 -94.3
        -134.6C-61.1 -163.5 -30.6 -200.7 9.9 -214.4C50.4 -228 100.7 -217.9 143
        -192;

        M132.7 -191.3C169 -156.3 193.4 -113.5 207.8 -67.8C222.2 -22.1 226.7
        26.5 206.6 60.6C186.6 94.8 142.1 114.6 103.6 128.4C65 142.2 32.5 150.1
        -10.5 164.5C-53.5 179 -107 199.9 -154.5 189C-202.1 178.1 -243.7 135.4
        -240.7 90.9C-237.8 46.4 -190.2 0 -169.1 -51.9C-148 -103.7 -153.4 -161.1
        -129.6 -200.2C-105.8 -239.3 -52.9 -260.1 -2.4 -256.9C48.2 -253.7 96.4
        -226.3 132.7 -191.3;

        M92.9 -119.1C125.1 -104.5 159.1 -83.6 191.4 -47.3C223.8 -10.9 254.6
        40.9 242 78.3C229.4 115.7 173.5 138.8 125.9 170.3C78.4 201.9 39.2 241.9 -8.4
        253.5C-56 265.1 -112.1 248.3 -142.5 211.1C-172.9 174 -177.8 116.7 -185.9
        66.4C-194 16.1 -205.4 -27.2 -199 -70.1C-192.6 -113 -168.3 -155.6 -132.1
        -168.9C-96 -182.1 -48 -166.1 -8.8 -153.9C30.4 -141.8 60.7 -133.6 92.9
        -119.1;
        "/>
      </path>
      <path fill="none" stroke={mode === "light" ? "#7FB9BD" : "#873582"} strokeWidth="6">
        <animate fill="transparent" stroke="green"
        repeatCount="indefinite" attributeName="d" strokeWidth="6" dur="15s"
        values="M84.7 -116.8C118.5 -92.1 160.5 -78.9 172.5 -53.4C184.5 -27.8
        166.4 10.2 143.7 36.3C121 62.5 93.5 76.8 68.8 105.5C44.1 134.3 22 177.7 -0.9
        179C-23.9 180.2 -47.8 139.5 -83.5 114.2C-119.1 89 -166.6 79.3 -178.2
        55.1C-189.9 31 -165.8 -7.5 -141.9 -35.3C-118 -63.1 -94.3 -80.1 -70.6
        -108.1C-47 -136.1 -23.5 -175 1 -176.4C25.5 -177.7 50.9 -141.4 84.7 -116.8;
        

        M106.4 -155.8C124.6 -133.2 117 -84.4 112.8 -48.2C108.6 -12.1 107.8 11.3
        110.7 46.4C113.7 81.4 120.3 128.1 102.5 158.6C84.6 189.2 42.3 203.6 -0.3
        204C-42.9 204.4 -85.8 190.8 -109.9 162.3C-134 133.8 -139.3 90.4 -142.2
        52.9C-145.2 15.5 -145.8 -16.1 -139 -47.6C-132.1 -79.2 -117.8 -110.8 -93.4
        -131.4C-69 -151.9 -34.5 -161.5 4.8 -168.1C44.1 -174.7 88.2 -178.4 106.4
        -155.8;

        M87.3 -119.6C120.1 -96.3 158.5 -80.1 174.2 -51.9C189.9 -23.6 182.9 16.8
        172.2 57.8C161.4 98.8 146.8 140.4 117.5 164.2C88.2 188 44.1 194 9.5
        180.9C-25.1 167.9 -50.2 135.7 -77.9 111.4C-105.6 87.1 -136 70.6 -156.5
        42.6C-176.9 14.6 -187.4 -24.8 -170.6 -49C-153.9 -73.2 -110 -82.1 -77.1
        -105.4C-44.1 -128.7 -22 -166.3 2.6 -169.9C27.2 -173.5 54.5 -143 87.3 -119.6;

        M104.6 -142.5C131.2 -124.6 145.5 -88.3 144.4 -55.5C143.3 -22.7 126.8
        6.6 119.1 41.3C111.4 75.9 112.4 116 94 128.8C75.6 141.6 37.8 127.1 -3.1
        131.4C-44.1 135.7 -88.2 158.9 -108.3 146.6C-128.4 134.4 -124.6 86.8 -135.1
        45.9C-145.5 5 -170.2 -29.2 -171.7 -65.4C-173.1 -101.6 -151.2 -139.8 -118.7
        -155.7C-86.2 -171.7 -43.1 -165.3 -2.1 -162.5C39 -159.7 78 -160.3 104.6
        -142.5;
        "/>
      </path>
      <path fill="none" stroke={mode === "light" ? "#7FB9BD" : "#873582"} strokeWidth="6">
        <animate fill="transparent" stroke="green"
        repeatCount="indefinite" attributeName="d" strokeWidth="6" dur="15s"
        values="M81.8 -100.1C105.5 -95.3 124.1
        -70.8 130.2 -44.2C136.3 -17.5 130 11.3 119.8 37.8C109.7 64.3 95.7 88.4 75.1
        101C54.5 113.6 27.2 114.8 5.7 107C-15.9 99.2 -31.7 82.4 -50.1 69C-68.5 55.6
        -89.4 45.7 -95.7 30.2C-102.1 14.6 -93.8 -6.6 -89.4 -31.7C-84.9 -56.8 -84.2
        -85.9 -69.9 -93.7C-55.6 -101.6 -27.8 -88.3 0.6 -89.1C29 -89.9 58 -104.8
        81.8 -100.1;
    
        M47.5 -69.8C65.5 -52.2 87 -43.7 103.4 -25.9C119.8 -8 131.2 19.2 122.5
        37.8C113.7 56.5 84.8 66.7 61 79.1C37.2 91.6 18.6 106.3 -1.8 108.7C-22.1
        111.1 -44.3 101.3 -65.5 88C-86.8 74.7 -107.1 58.1 -117.3 35.9C-127.4 13.8
        -127.4 -13.8 -115.6 -33.6C-103.8 -53.5 -80.1 -65.6 -58.9 -82.2C-37.6 -98.8
        -18.8 -119.9 -2.1 -117.1C14.7 -114.2 29.4 -87.5 47.5 -69.8;

        M52.6 -74.7C68 -61.2 80.1 -45.6 87 -27.5C93.8 -9.5 95.4 11 92 32.5C88.6
        53.9 80.1 76.3 64 89.6C47.8 102.8 23.9 106.9 -2.7 110.7C-29.4 114.5 -58.8
        117.9 -70.7 103.3C-82.6 88.6 -76.9 55.9 -84.9 28.3C-92.9 0.7 -114.4 -21.7
        -112.7 -39.6C-111 -57.5 -86.1 -70.8 -63.4 -82C-40.8 -93.1 -20.4 -102 -0.9
        -100.8C18.6 -99.6 37.2 -88.2 52.6 -74.7;

        M60.5 -83.9C72.4 -74.6 71.8 -48.9 81.6 -25.1C91.3 -1.2 111.3 20.7 107.9
        36.3C104.5 51.9 77.8 61.1 56 66.5C34.1 71.9 17 73.5 0.8 72.4C-15.5 71.3 -31
        67.6 -54.7 62.8C-78.5 58.1 -110.6 52.2 -114.7 37.7C-118.9 23.2 -95.1 0
        -81.6 -21.9C-68.1 -43.8 -64.9 -64.4 -53 -73.7C-41.1 -83 -20.6 -81 1.9
        -83.5C24.3 -86.1 48.6 -93.2 60.5 -83.9;
        "/>
      </path>
    </Svg>
  )
}

const Svg = styled.svg`
position: absolute;
z-index: 0;
height: 60%;
width: 100%;
`

CenterSvg.propTypes = {
  mode: PropTypes.string
}

export default CenterSvg
