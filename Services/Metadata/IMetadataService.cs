// <copyright file="IMetadataService.cs" company="Tedeschi">
// Copyright (c) Tedeschi. All rights reserved.
// </copyright>

namespace GenerativeNFT.Services.Metadata
{
    using System.Collections.Generic;
    using GenerativeNFT.Model;

    public interface IMetadataService
    {
        void Generate(string outputFolder, List<Metadata> metadataList, int type, bool useFileExtension);

        void Update(string outputFolder, string newImageBaseUri, int type, bool useFileExtension);
    }
}
