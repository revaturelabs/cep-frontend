import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { selectBatch } from "../../redux/actions/batchAction";

export default function GetBatchDetails({ batches }) {
  const dispatch = useDispatch();

  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
        Display
      </Button> */}

      {batches.map((detail) => {
        const handleClick = () => {
          dispatch(selectBatch(detail));
        }

        return(
          <div key={detail.batchId}>
            <Button variant='outlined' onClick={handleClick}>
            <table>
              <tbody>
                <tr style={{fontSize:'13px'}}><td>Batch ID: {detail.batchId}</td></tr>
              </tbody>
            </table>
            </Button>
            <br />
          </div>
        )
      })}
    </>
  );
}
