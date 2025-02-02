import React from 'react';

const GPUClusterTable = () => {
  // Data for the table
  const tableData = [
    {
      cluster: 'adan.grid.cesnet.cz',
      nodes: 'adan[1-61].grid.cesnet.cz',
      gpusPerNode: '2x Tesla T4',
      computeCapability: '7.5',
      memMiB: '15 109',
      cudnn: 'YES',
    },
    {
      cluster: 'bee.cerit-sc.cz',
      nodes: 'bee[1-10].cerit-sc.cz',
      gpusPerNode: '2x H100 NVL',
      computeCapability: '9.0',
      memMiB: '95 830',
      cudnn: 'YES',
    },
    {
      cluster: 'cha.natur.cuni.cz',
      nodes: 'cha.natur.cuni.cz',
      gpusPerNode: '8x GeForce RTX 2080 Ti',
      computeCapability: '7.5',
      memMiB: '11 019',
      cudnn: 'YES',
    },
    {
      cluster: 'fau.natur.cuni.cz',
      nodes: 'fau[1-3].natur.cuni.cz',
      gpusPerNode: '8x Quadro RTX 5000',
      computeCapability: '7.5',
      memMiB: '16 125',
      cudnn: 'YES',
    },
    {
      cluster: 'fer.natur.cuni.cz',
      nodes: 'fer[1-3].natur.cuni.cz',
      gpusPerNode: '8x RTX A4000',
      computeCapability: '8.6',
      memMiB: '16 117',
      cudnn: 'YES',
    },
    {
      cluster: 'galdor.metacentrum.cz',
      nodes: 'galdor[1-20].metacentrum.cz',
      gpusPerNode: '4x A40',
      computeCapability: '8.6',
      memMiB: '45 634',
      cudnn: 'YES',
    },
    {
      cluster: 'gita.cerit-sc.cz',
      nodes: 'gita[1-7].cerit-sc.cz',
      gpusPerNode: '2x GeForce RTX 2080 Ti',
      computeCapability: '7.5',
      memMiB: '11 019',
      cudnn: 'YES',
    },
    {
      cluster: 'glados.cerit-sc.cz',
      nodes: 'glados1.cerit-sc.cz',
      gpusPerNode: '1x TITAN V GPU',
      computeCapability: '7.0',
      memMiB: '12 066',
      cudnn: 'YES',
    },
    {
      cluster: 'glados.cerit-sc.cz',
      nodes: 'glados[2-7].cerit-sc.cz',
      gpusPerNode: '2x GeForce RTX 2080',
      computeCapability: '7.5',
      memMiB: '7 982',
      cudnn: 'YES',
    },
    {
      cluster: 'glados.cerit-sc.cz',
      nodes: 'glados[10-13].cerit-sc.cz',
      gpusPerNode: '2x 1080Ti GPU',
      computeCapability: '6.1',
      memMiB: '11 178',
      cudnn: 'YES',
    },
    {
      cluster: 'grimbold.metacentrum.cz',
      nodes: 'grimbold.metacentrum.cz',
      gpusPerNode: '2x Tesla P100',
      computeCapability: '6.0',
      memMiB: '12 198',
      cudnn: 'YES',
    },
    {
      cluster: 'konos.fav.zcu.cz',
      nodes: 'konos[1-8].fav.zcu.cz',
      gpusPerNode: '4x GeForce GTX 1080 Ti',
      computeCapability: '6.1',
      memMiB: '11 178',
      cudnn: 'YES',
    },
    {
      cluster: 'luna2022.fzu.cz',
      nodes: 'luna[201-206].fzu.cz',
      gpusPerNode: '1x A40',
      computeCapability: '8.6',
      memMiB: '45 634',
      cudnn: 'YES',
    },
    {
      cluster: 'zia.cerit-sc.cz',
      nodes: 'zia[1-5].cerit-sc.cz',
      gpusPerNode: '4x A100',
      computeCapability: '8.0',
      memMiB: '40 536',
      cudnn: 'YES',
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Cluster</th>
          <th>Nodes</th>
          <th>GPUs per node</th>
          <th>Compute capability</th>
          <th>Mem [MiB]</th>
          <th>CuDNN</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.cluster}</td>
            <td>{row.nodes}</td>
            <td>{row.gpusPerNode}</td>
            <td>{row.computeCapability}</td>
            <td>{row.memMiB}</td>
            <td>{row.cudnn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GPUClusterTable;
