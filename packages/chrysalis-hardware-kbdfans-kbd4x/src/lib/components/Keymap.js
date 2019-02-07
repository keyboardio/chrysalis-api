// -*- mode: js-jsx -*-
/* chrysalis-hardware-kbdfans-kbd4x -- Chrysalis KBDFans KBD4x library
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
import KLEKeymap from "@chrysalis-api/react-kle-keymap"

class Keymap extends React.Component {
  render() {
    const SVG = new KLEKeymap(4, 12, this.props);
    const Keymap = SVG.Keymap,
          Key = SVG.Key;
    return (
      <Keymap className={this.props.className}>
        <g>
          <Key row={0} col={0} />
          <Key row={0} col={1} />
          <Key row={0} col={2} />
          <Key row={0} col={3} />
          <Key row={0} col={4} />
          <Key row={0} col={5} />
          <Key row={0} col={6} />
          <Key row={0} col={7} />
          <Key row={0} col={8} />
          <Key row={0} col={9} />
          <Key row={0} col={10} />
          <Key row={0} col={11} />
        </g>

        <g>
          <Key row={1} col={0} />
          <Key row={1} col={1} />
          <Key row={1} col={2} />
          <Key row={1} col={3} />
          <Key row={1} col={4} />
          <Key row={1} col={5} />
          <Key row={1} col={6} />
          <Key row={1} col={7} />
          <Key row={1} col={8} />
          <Key row={1} col={9} />
          <Key row={1} col={10} />
          <Key row={1} col={11} />
        </g>

        <g>
          <Key row={2} col={0} />
          <Key row={2} col={1} />
          <Key row={2} col={2} />
          <Key row={2} col={3} />
          <Key row={2} col={4} />
          <Key row={2} col={5} />
          <Key row={2} col={6} />
          <Key row={2} col={7} />
          <Key row={2} col={8} />
          <Key row={2} col={9} />
          <Key row={2} col={10} />
          <Key row={2} col={11} />
        </g>

        <g>
          <Key row={3} col={0} />
          <Key row={3} col={1} />
          <Key row={3} col={2} />
          <Key row={3} col={3} />
          <Key row={3} col={4} />
          <Key row={3} col={5} width={2.35} />
          <Key row={3} col={7} />
          <Key row={3} col={8} />
          <Key row={3} col={9} />
          <Key row={3} col={10} />
          <Key row={3} col={11} />
        </g>
      </Keymap>
    );
  }
}

export default Keymap;
