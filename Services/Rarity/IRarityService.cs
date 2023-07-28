// <copyright file="IRarityService.cs" company="Tedeschi">
// Copyright (c) Tedeschi. All rights reserved.
// </copyright>

namespace GenerativeNFT.Services.Metadata
{
    using System.Collections.Generic;
    using GenerativeNFT.Model;

    public interface IRarityService
    {
        void Generate(string outputFolder, List<Metadata> metadataList, int type);
    }
}
