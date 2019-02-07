// -*- mode: js-jsx -*-
/* react-kle-keymap -- React KLE Keymap library for Chrysalis hardware libs
 * Copyright (C) 2019  Keyboard.io, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";

class KLEKeymap {
  constructor(rows, cols, props) {
    this.rows = rows;
    this.cols = cols;

    this.keymap = props.keymap || Array(rows * cols).fill().map(() => 65535);
    this.layer = props.index;
    this.selectedKey = props.selectedKey;
    this.onKeySelect = props.onKeySelect;
  }

  keyIndex = (row, col) => {
    return row * this.rows + col;
  };

  Key = props => {
      const { x, y, row, col, transform } = props;
      const px = 1 + 54 * (x || col),
            py = 1 + 54 * (y || row);
      const width = (props.width || 1),
            height = (props.height || 1),
            bottom = py + height * 40 - 4;

      const labels = this.keymap[this.keyIndex(row, col)],
            stroke = this.selectedKey == this.keyIndex(row, col) ? "#f3b3b3" : "#b3b3b3";

      return (
        <g
          transform={transform}
          onClick={this.onKeySelect}
          data-layer={this.layer}
          data-key-index={this.keyIndex(row, col)}
          className="key"
        >
          <rect x={px} y={py} rx={3}
                width={width * 40 + 8} height={height * 40 + 8}
                stroke={stroke} strokeWidth="1.55" fill="#ffffff" />
          <text x={px + 3} y={py + 14}>
            {labels.extraLabel}
          </text>
          <text x={px + 3} y={bottom}>
            {width > 1 ? labels.verbose || labels.label : labels.label}
          </text>
        </g>
      );

  }

  Keymap = props => {
    const width = this.cols * 54 - 4,
          height = this.rows * 54 - 4;

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        className={props.className || "layer"}
      >
        {props.children}
      </svg>
    )
  }
}

export default KLEKeymap;
